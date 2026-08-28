---
layout: page
title: Soil Carbon Mapping
description: Compact CNN-Transformers for spatially robust regional soil organic carbon prediction.
img: /assets/img/GenAIRemoteSensing.webp
image_alt: Remote sensing visualization for soil organic carbon mapping
importance: 4
category: sustainability
focus: Geospatial ML
year: 2026
tags: [Remote sensing, CNN-Transformer, Spatial validation, JAX]
paper: https://doi.org/10.1016/j.geoderma.2026.117933
github: https://github.com/ValerianFourel/SOCmapping
related_publications: false
---

## Compact models, stricter spatial evidence

Soil organic carbon mapping supports soil assessment and climate-change mitigation, but model performance can look overly optimistic when nearby observations appear in both training and evaluation data.

This research evaluates compact CNN-Transformer architectures under spatially robust validation at regional scale. It grew from an earlier generative-learning prototype using variational autoencoders on satellite bands, then moved toward a publishable comparison focused on generalization, efficiency, and practical mapping quality.

The work used geospatial and environmental data from **16,000 soil samples across Bavaria**, with JAX-based preprocessing and feature-validation workflows.

The resulting peer-reviewed article—co-authored with Martin Wiesmeier, Nafiseh Kakhani, and Thomas Scholten—was published in **Geoderma 472 (2026)**.

**Explore:** [Read the paper](https://doi.org/10.1016/j.geoderma.2026.117933) · [View the code](https://github.com/ValerianFourel/SOCmapping) · [Read the earlier VAE study](https://medium.com/@valerian.fourel/can-we-use-generative-ai-for-sustainability-a-use-case-106440723494)
