---
layout: page
title: MiniFaceGPT
description: A compact vision-language model adapted for facial-emotion understanding.
img: /assets/img/miniFaceGPT.webp
image_alt: MiniFaceGPT vision-language model interface
importance: 3
category: work
focus: Multimodal learning
year: 2025
tags: [VLM, LoRA, LLaMA 2, BERT]
huggingface: https://huggingface.co/spaces/ValerianFourel/miniFaceGPT
github: https://github.com/ValerianFourel/MiniGPT-4
related_publications: false
---

## Can a compact VLM reason about facial affect?

MiniFaceGPT adapts the MiniGPT-v2 framework for facial-emotion understanding. I introduced LoRA-based fine-tuning, using BERT-derived visual representations with a LLaMA 2–7B language backbone.

The model became more consistent at assigning common emotion labels after fine-tuning, while harder categories such as contempt remained challenging. That limitation is useful: a general vision-language model can improve on a narrow manifold, but it does not automatically become a reliable specialist.

The project reinforced a principle that now informs my agentic work: reliability often comes from letting a system select the right specialized tool, not simply scaling one model.

**Explore:** [Try the Hugging Face Space](https://huggingface.co/spaces/ValerianFourel/miniFaceGPT) · [Download the weights](https://huggingface.co/ValerianFourel/FaceVLM) · [View the code](https://github.com/ValerianFourel/MiniGPT-4) · [Read the project article](https://medium.com/@valerian.fourel/minifacegpt-a-vlm-to-label-human-faces-17a281270eb3)
