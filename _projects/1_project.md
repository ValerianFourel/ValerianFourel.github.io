---
layout: page
title: SeoulDoc
description: Agentic medical-facility search for international residents in Seoul.
img: /assets/img/SeoulDoc.jpg
image_alt: SeoulDoc medical facility search interface
importance: 1
category: work
focus: Agentic search
year: 2026
tags: [RAG, Vector retrieval, Tool calling, Evaluation]
live: https://www.seouldoc.io/
related_publications: false
---

## A search product for a real information gap

[SeoulDoc](https://www.seouldoc.io/) helps international residents navigate medical facilities in Seoul. The product turns natural-language needs and preferences into grounded facility recommendations while making its informational—not diagnostic—role explicit.

The deployed system covers **8,484 healthcare facilities** and **1.25 million review embeddings**. It combines structured records, vector retrieval, ranking, prompt orchestration, and LLM reasoning in one end-to-end workflow.

## System design

- **Intent and constraint extraction:** translates a request into medical specialty, location, hard constraints, and softer preferences.
- **Retrieval and ranking:** searches structured facility data and review embeddings, then ranks the evidence before generation.
- **Tool-calling workflow:** keeps search operations explicit and inspectable instead of asking one prompt to do everything.
- **Evaluation and safety:** applies checks and domain constraints appropriate to high-stakes medical information.

{% include figure.liquid path="assets/img/architectureRAG.jpg" title="SeoulDoc retrieval and ranking architecture" class="img-fluid" alt="Architecture diagram for the SeoulDoc retrieval and ranking system" %}

The interface also foregrounds emergency numbers and a medical-information disclaimer. That boundary is part of the product architecture: the system helps people find facilities; it does not diagnose or replace medical professionals.

**Explore:** [Open SeoulDoc](https://www.seouldoc.io/)
