---
layout: default
title: Machine Learning Engineer
nav_title: about
permalink: /
description: Machine Learning Engineer building reliable LLM, RAG, agentic AI, and production ML systems.
---

<div class="vf-home">
  <section class="vf-hero" aria-labelledby="hero-title">
    <div class="vf-hero-copy">
      <p class="vf-eyebrow">Machine Learning Engineer <span aria-hidden="true">/</span> Hamburg, Germany</p>
      <h1 id="hero-title">I engineer AI systems from <span>research signal</span> to production.</h1>
      <p class="vf-hero-lede">
        I specialize in LLM post-training, evaluation, retrieval, and agentic AI—turning promising research into systems that are measurable, reproducible, and useful.
      </p>
      <div class="vf-actions" aria-label="Primary links">
        <a class="vf-button vf-button-primary" href="{{ '/projects/' | relative_url }}">Explore selected work <span aria-hidden="true">→</span></a>
        <a class="vf-button vf-button-secondary" href="{{ '/assets/pdf/Valerian-Fourel-CV.pdf' | relative_url }}">Download CV <span aria-hidden="true">↗</span></a>
      </div>
      <div class="vf-affiliations">
        <span>Currently at</span>
        <a href="https://www.bwl.uni-hamburg.de/en/statistik/team/fourel.html">University of Hamburg</a>
        <i aria-hidden="true"></i>
        <a href="https://economicai.com/">Economic AI GmbH</a>
      </div>
    </div>

    <figure class="vf-portrait">
      <img src="{{ '/assets/img/VF.jpg' | relative_url }}" alt="Portrait of Valerian Fourel" width="1200" height="800" loading="eager">
      <div class="vf-signal-rail" aria-hidden="true">
        <span><i></i>Research</span>
        <span><i></i>Evaluate</span>
        <span><i></i>Deploy</span>
      </div>
      <figcaption>Valerian Fourel <span>ML Engineer</span></figcaption>
    </figure>

  </section>

  <section class="vf-proof" aria-label="Selected impact">
    <div><strong>50K+</strong><span>causal ML workflows optimized</span></div>
    <div><strong>100K+</strong><span>candidate prompts generated and screened</span></div>
    <div><strong>1.25M</strong><span>review embeddings in production RAG</span></div>
    <div><strong>500K</strong><span>images used in multimodal research</span></div>
  </section>

  <section class="vf-section vf-capabilities" aria-labelledby="capabilities-title">
    <header class="vf-section-heading">
      <p class="vf-eyebrow">Focus areas</p>
      <h2 id="capabilities-title">Rigour at every layer of the ML system.</h2>
      <p>I work where modeling, evaluation, and software engineering meet—especially when reliability matters more than a polished demo.</p>
    </header>

    <div class="vf-capability-list">
      <article>
        <p class="vf-capability-label">LLM systems</p>
        <h3>Post-training & evaluation</h3>
        <p>Reproducible generation and screening across 100K+ candidate prompts, model evaluation, distillation from 70B+ teachers, schema validation, reranking, and failure-safe experiment logging.</p>
        <p class="vf-stack">PyTorch · LLM APIs · Evaluation · Distillation</p>
      </article>
      <article>
        <p class="vf-capability-label">Applied retrieval</p>
        <h3>RAG & agentic search</h3>
        <p>Tool-calling workflows that combine structured data, vector retrieval, ranking, and domain-aware safety constraints.</p>
        <p class="vf-stack">Vector search · Embeddings · Tool calling · Ranking</p>
      </article>
      <article>
        <p class="vf-capability-label">Research engineering</p>
        <h3>ML infrastructure at scale</h3>
        <p>Production-minded data and experimentation pipelines across causal ML, multimodal learning, geospatial modeling, and 3D human motion.</p>
        <p class="vf-stack">PySpark · SQL · Databricks · AWS · Docker</p>
      </article>
    </div>

  </section>

  <section class="vf-section vf-featured" aria-labelledby="featured-title">
    <header class="vf-section-heading vf-section-heading-row">
      <div>
        <p class="vf-eyebrow">Selected work</p>
        <h2 id="featured-title">Evidence, not adjectives.</h2>
      </div>
      <a class="vf-text-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
    </header>

    <article class="vf-feature vf-feature-primary">
      <a class="vf-feature-media" href="https://www.seouldoc.io/" aria-label="Open SeoulDoc">
        <img src="{{ '/assets/img/SeoulDoc.jpg' | relative_url }}" alt="SeoulDoc medical facility search interface" width="1024" height="559" loading="lazy">
        <span>Live product <i aria-hidden="true">↗</i></span>
      </a>
      <div class="vf-feature-copy">
        <p class="vf-kicker">Agentic search · Healthcare information · 2026</p>
        <h3>SeoulDoc</h3>
        <p>An end-to-end RAG and agentic search application helping international residents find medical facilities across Seoul, with safety constraints for a high-stakes information domain.</p>
        <dl class="vf-metrics">
          <div><dt>8,484</dt><dd>facilities</dd></div>
          <div><dt>1.25M</dt><dd>review embeddings</dd></div>
        </dl>
        <div class="vf-inline-links">
          <a href="https://www.seouldoc.io/">Visit SeoulDoc <span aria-hidden="true">↗</span></a>
          <a href="{{ '/projects/1_project/' | relative_url }}">Read the case study <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </article>

    <div class="vf-feature-grid">
      <article class="vf-feature vf-feature-compact">
        <a class="vf-feature-media" href="https://doi.org/10.1016/j.geoderma.2026.117933" aria-label="Open the Geoderma publication">
          <img src="{{ '/assets/img/GenAIRemoteSensing.webp' | relative_url }}" alt="Remote sensing visualization for soil organic carbon modeling" width="720" height="720" loading="lazy">
          <span>Peer-reviewed research <i aria-hidden="true">↗</i></span>
        </a>
        <div class="vf-feature-copy">
          <p class="vf-kicker">Geospatial ML · Geoderma · 2026</p>
          <h3>Compact CNN-Transformers for soil carbon mapping</h3>
          <p>Spatially robust regional soil organic carbon modeling, connecting compact deep-learning architectures with practical environmental monitoring.</p>
          <div class="vf-inline-links">
            <a href="https://doi.org/10.1016/j.geoderma.2026.117933">Read the paper <span aria-hidden="true">↗</span></a>
            <a href="{{ '/publications/' | relative_url }}">Publication details <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>

      <article class="vf-feature vf-feature-compact">
        <a class="vf-feature-media" href="{{ '/projects/2_project/' | relative_url }}" aria-label="Read the StableFace project">
          <img src="{{ '/assets/img/StableFace.webp' | relative_url }}" alt="Faces generated by the StableFace model" width="650" height="698" loading="lazy">
          <span>Generative vision <i aria-hidden="true">→</i></span>
        </a>
        <div class="vf-feature-copy">
          <p class="vf-kicker">Diffusion models · Affective computing</p>
          <h3>StableFace</h3>
          <p>A fine-tuned Stable Diffusion model for photorealistic faces with stronger control over emotional expression.</p>
          <div class="vf-inline-links">
            <a href="https://huggingface.co/spaces/ValerianFourel/StableFaceEmotion">Try the model <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/ValerianFourel/StableFace">View code <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
    </div>

  </section>

  <section class="vf-section vf-experience" aria-labelledby="experience-title">
    <header class="vf-section-heading">
      <p class="vf-eyebrow">Experience</p>
      <h2 id="experience-title">Research depth, production habits.</h2>
    </header>

    <div class="vf-timeline">
      <article>
        <div class="vf-timeline-meta"><time>2025—Now</time><span>Hamburg</span></div>
        <div>
          <h3>Machine Learning Engineer</h3>
          <p class="vf-org"><a href="https://www.bwl.uni-hamburg.de/en/statistik/team/fourel.html">University of Hamburg</a> / <a href="https://economicai.com/">Economic AI GmbH</a></p>
          <p>LLM evaluation and distillation, a 100K+ prompt generation and screening pipeline, and causal ML workflows accelerated 4× with PySpark and SQL on AWS Databricks.</p>
        </div>
      </article>
      <article>
        <div class="vf-timeline-meta"><time>2023—2025</time><span>Tübingen</span></div>
        <div>
          <h3>Research Assistant</h3>
          <p class="vf-org"><a href="https://is.mpg.de/">Max Planck Institute for Intelligent Systems</a></p>
          <p>Multimodal pipelines for 50,000+ motion sequences, foundation-model fine-tuning, affect modeling, and reproducible Docker environments for research teams.</p>
        </div>
      </article>
      <article>
        <div class="vf-timeline-meta"><time>2023</time><span>Tübingen</span></div>
        <div>
          <h3>Data Science Intern</h3>
          <p class="vf-org">Soil Science Lab, University of Tübingen</p>
          <p>Geospatial data pipelines and predictive modeling across 16,000 soil samples—the work that grew into a 2026 Geoderma publication.</p>
        </div>
      </article>
    </div>

    <div class="vf-education">
      <p class="vf-eyebrow">Education</p>
      <div><strong>MSc, Quantitative Data Science</strong><span>University of Tübingen · Machine Learning specialization</span></div>
      <div><strong>BA, Computer Science & Economics</strong><span>McGill University</span></div>
    </div>

  </section>

  <section class="vf-section vf-personal" aria-labelledby="personal-title">
    <div>
      <p class="vf-eyebrow">Beyond the stack</p>
      <h2 id="personal-title">Built across disciplines and borders.</h2>
    </div>
    <p>French and Austrian, educated in Canada and Germany, and currently learning Korean. Away from the terminal: equities and technology investing, strategic board games, functional training, and music from the 1950s through the 1980s.</p>
  </section>

  <section class="vf-contact" aria-labelledby="contact-title">
    <p class="vf-eyebrow">Start a conversation</p>
    <h2 id="contact-title">Building something that needs both research judgment and engineering discipline?</h2>
    <div class="vf-contact-links">
      <a href="mailto:valerian.fourel@gmail.com">valerian.fourel@gmail.com <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/valerian-raphael-fourel-b9750417b/">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/ValerianFourel">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://huggingface.co/ValerianFourel">Hugging Face <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</div>
