---
layout: page
title: Seoul Doctor Matchmaker
description: AI-Powered Medical Facility Search for Seoul using Hybrid RAG
img: assets/img/SeoulDoc.jpg
importance: 1
category: work
related_publications: false
---

**Seoul Doctor Matchmaker** is a sophisticated conversational AI system designed to help foreign residents navigate the complex healthcare landscape of Seoul, South Korea. By bridging the language barrier and analyzing data from over **40,000 medical facilities**, the system provides highly personalized recommendations based on specific medical needs, location, and even subjective preferences like "friendly staff" or "English support."

The system utilizes a **Hybrid Search (BM25 + Vector embeddings)** approach, intelligent routing, and a custom RAG (Retrieval-Augmented Generation) pipeline to process natural language queries in both English and Korean.
Find it at: seouldoc.io

## The Problem & Solution

Foreign residents in Seoul face significant challenges: a language barrier, information overload (40k+ clinics), and difficulty finding facilities that match specific preferences like insurance acceptance or parking availability.

This project solves this via an AI agent that:

- **Understands Intent:** Detects 9 distinct conversation intents (e.g., `PROVIDE_INFO`, `EMERGENCY`, `CHANGE_CRITERIA`).
- **Hybrid Search:** Combines **BM25** (keyword precision) and **Vector Search** (semantic understanding) using a dynamic alpha routing strategy.
- **Extracts Entities:** Identifies hard constraints (Must-haves) vs. soft preferences (Nice-to-haves) using LLM-based extraction.

---

## System Architecture

The backend is built with **FastAPI** and utilizes a Router-Controller architecture. It manages state across multi-turn conversations, validating keywords against a synonym dictionary to prevent hallucinations.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/architectureRAG.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The architecture flow: From User Input → Intent Routing → Entity Extraction → Dual-Path Search Execution → Hybrid RAG Ranking → Response Generation.
</div>

### Intelligent Search Strategy

The core innovation lies in the **Adaptive Precision System**. The engine adjusts its search strategy based on the confidence level of the user's request:

1.  **High Precision (≥70% confidence):** Strict specialty filtering + Semantic ranking. Used when the user clearly asks for a "dentist" or "dermatologist."
2.  **Medium Precision (30-70%):** Specialty filter + General fallback. Used for ambiguous queries.
3.  **Low Precision (<30%):** Distance-first ranking. Used for "nearest doctor" queries.

To ensure the best results, I implemented a **Dual-Path Ranking** system. **Path A** performs strict filtering (Hard Keywords & Exclusions), while **Path B** runs an additive scoring model to boost results based on soft preferences.

## The Keyword Engine

A unique feature of this project is the classification of keywords into four distinct categories to fine-tune the ranking algorithm:

- **Hard Keywords (+2000 boost):** Must-have features (e.g., `parking`, `MRI`, `weekend hours`).
- **Soft Keywords (+500 boost):** Subjective preferences (e.g., `friendly`, `modern`, `experienced`).
- **Negative Keywords (-1500 penalty):** Things to avoid (e.g., `crowded`, `rushed`).
- **Negative Hard Keywords (-5000 penalty):** Strict exclusions (e.g., `no parking`).

Here is a snippet of the **Router Prompt** logic used to classify user intent before search execution:

{% raw %}

```python
ROUTER_PROMPT = """
Classify user intent based on:
- Message content
- Current state (specialty, location, ready_to_search)
- Turn count

Return JSON:
{
  "intent": "PROVIDE_INFO",
  "confidence": 0.95,
  "reasoning": "User specified dentist and location"
}
"""
{% endraw %}
```
