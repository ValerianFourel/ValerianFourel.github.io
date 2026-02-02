---
layout: page
title: Generative AI for Sustainability
description: Using VAEs fitted on satellite data for soil carbon content estimation
img: /assets/img/vae-sustainability-hero.jpg
importance: 1
category: sustainability
---

## Can we use Generative AI for Sustainability? A Practical Case Using VAEs Fitted on Satellite Data for Soil Carbon Content Estimation

Does Generative AI have potential in the realm of sustainability? A key issue of Climate Change is global soil depletion. We wanted to prove that we can achieve significant results using generative techniques for soil health.

We used Variational Autoencoders (VAE), a generative model, to estimate soil organic carbon content — an essential factor in assessing soil health and promoting sustainable agricultural practices. The VAE model excels in processing and synthesizing complex data, enabling it to capture the intricate relationships within satellite imagery and other geospatial data types.

By employing a VAE for each satellite band, we can generate a latent space — a compressed representation of the original input data — that retains critical information pertinent to organic carbon levels. Those latent spaces are then used to regress the organic carbon content, providing a novel method to monitor and manage soil health on a large scale. These applications are a proof of concept for predictive and prescriptive analytics in sustainable land management using generative models.

**Project Results:** [View Full Report](https://drive.google.com/file/d/1LjitPa5l2pzqLC6_ptD5RvLfWMAZGBOl/view?usp=sharing)

---

## The Challenge of Measuring Soil Organic Carbon

Soil organic carbon is a dynamic and complex component of the soil, influenced by various factors including climate, land use, and farming practices. Accurate measurement and monitoring are vital for making informed decisions regarding land management and environmental policies.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soil-carbon-challenge.jpg" title="Soil organic carbon visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Understanding soil organic carbon distribution is crucial for sustainable land management
</div>

---

## A Generative Neural Network: Convolutional Variational Autoencoders

The Variational Autoencoder (VAE) class of generative machine learning models is particularly effective at handling complex, high-dimensional data. A VAE network replicates its input after applying a nonlinear data reduction to a latent space based on a nonlinear reduction of the data. By using a reparametrization trick, we are able to determine the latent space value of an input, using the encoding part of the VAE which predicts the mean and standard deviation of a Gaussian distribution.

### The Generative Nature of CNN VAEs in Denoising Applications

By learning to generate and reconstruct data, the model inherently learns to filter out noise and irrelevant information, focusing instead on the most salient features necessary for accurate Organic Content predictions. This capability makes the convolutional VAE an excellent tool for remote sensing applications where data often contain substantial amounts of environmental and sensor-related noise.

---

## Methodology: Data Collection

Our approach utilizes multiple raster bands from satellite images, which represent different segments of the electromagnetic spectrum. These bands can capture various soil properties, which correlate with SOC levels. The VAE architecture is designed to encode these high-dimensional inputs into a lower-dimensional latent space, from which the SOC content can be predicted.

### Process Overview

**Data Collection:** We gather multispectral satellite images covering different geographic and climatic regions to ensure the model's versatility.

**Preprocessing:** The images are processed to align with the raster bands, and noise reduction techniques are applied to ensure data quality.

**Model Training:** The convolutional VAEs are trained on each dataset of images labeled with SOC measurements. This phase involves tuning hyperparameters to optimize the reconstruction and prediction accuracy.

**SOC Estimation:** The trained model predicts SOC by decoding the latent representations of new, unlabeled satellite images.

---

## Methodology: Model Training

We have trained each of the VAEs on 5 selected raster bands:

1. **Elevation** - [USGS GMTED2010](https://developers.google.com/earth-engine/datasets/catalog/USGS_GMTED2010_FULL)
2. **NPP** - [MODIS Net Primary Production](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD17A3HGF)
3. **LAI** - [MODIS Leaf Area Index](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD15A2H)
4. **LST** - [MODIS Land Surface Temperature](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD11A1)
5. **Evapotranspiration** - [PML_v2](https://developers.google.com/earth-engine/datasets/catalog/CAS_IGSNRR_PML_V2_v017)

Those bands have been evaluated as the most likely to influence Soil Organic Carbon (SOC). Furthermore, we assume that the elevation has not evolved significantly from 2010 to 2015.

The critical component of our dataset was the **2015 LUCAS (Land Use/Cover Area Frame Statistical Survey)** soil survey, which provided a robust foundation for training and validating our convolutional VAE model. Conducted between May and November of 2015, the survey collected soil samples from approximately 16,729 sites across Europe, offering a comprehensive snapshot of various soil properties, including organic carbon content.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soil-map-swiss.jpg" title="Soil map from Swiss Academy of Sciences" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Soil Map from the Swiss Academy of Sciences showing spatial distribution of soil properties
</div>

---

## Implementation Workflow

The process of using satellite raster data for soil organic carbon (SOC) prediction through our Convolutional Variational Autoencoders (VAE) involves several steps, from data acquisition and preprocessing to model training and evaluation. Here, we outline a comprehensive workflow using geemap, a Python library that facilitates the use of Google Earth Engine for geospatial data manipulation and visualization.

### Step 1: Data Acquisition with geemap

The first step involves acquiring satellite imagery raster data. Geemap can be utilized to extract multispectral raster datasets from Google Earth Engine, which hosts a vast array of satellite image collections. For this project, we focus on the spectral bands most relevant to predicting SOC characteristics.

### Step 2: Preprocessing and Transformation into Tensors

Once the raster data is acquired, the next step is preprocessing. This typically involves normalizing the data, handling missing values, and potentially augmenting the dataset to improve model robustness. The preprocessed raster images are then transformed into tensors, which are the required input formats for neural networks. The main difficulty is to transform to match coordinates in Europe with the position on the images of the tensors. All tensors are modified such that they represent the same surface area of about 33 km by 33 km.

### Step 3: Building the Convolutional VAE

With the data in the correct format, we proceed to define our Convolutional VAE architecture. This architecture combines convolutional layers for feature extraction from spatial data, with the encoding-decoding mechanism of a VAE. The encoder compresses the input tensors into a lower-dimensional latent space, while the decoder attempts to reconstruct the input data from this compressed representation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/resnet-block.jpg" title="ResNet block layer architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ResNet Block Layer used in the VAE architecture
</div>

### Step 4: Training the Convolutional VAE

During training, the model learns to minimize the reconstruction loss, adjusted by the latent space regularization to encourage efficient data encoding. We employ Root Mean Square Error (RMSE) as our loss metric, which provides a direct measure of reconstruction accuracy.

We aimed for an RMSE of about 0.08 on an epoch for our data and finetuned our VAEs until the manifold of the data was learned accordingly for compression.

Satellite image reconstruction is best performed using a composite loss function of MSE loss, LPIPS loss, and Kullback-Leibler divergence. LPIPS ensures fine details are preserved for satellite images.

With deep neural networks, LPIPS measures perceptual differences between two images. By analyzing high-level features extracted from various layers of pre-trained models, we can compute a more accurate estimate of visual likeness than pixel-based comparisons. This method aligns more closely with how humans perceive images and helps preserving textural and contextual integrity during the reconstruction phase of the VAE.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/composite-loss-mse.jpg" title="Composite loss function" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Composite loss on the VAEs using an MSE and Perceptual Loss using a Neural Network
</div>

For LST, we have used an L1 loss, that heuristically led to a reconstruction visually more similar to the input.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/composite-loss-l1.jpg" title="L1 composite loss" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Composite Loss using a Perceptual Neural Network and an L1 loss
</div>

We obtain the following VAE architecture:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vae-architecture.jpg" title="VAE architecture diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Architecture of the satellite raster band VAEs
</div>

### Step 5: Using the Latent Space for SOC Prediction

After training, the model encodes new, unlabeled data into the latent space. This latent representation, which ideally captures the essential information about the SOC characteristics from the input tensors, is then used as the features of our regression.

Here, we concatenate the 5 latent space vectors with location data derived from the LUCAS 2015 dataset to incorporate geographical context. In our 5 final VAE models, we have 5 latent spaces of varying sizes:

- **LST band:** 10
- **NPP band:** 40
- **LAI band:** 20
- **Elevation band:** 40
- **Evapotranspiration band:** 50

We obtain an X matrix of length 16,729 with 160 anonymous variables since the latent space only corresponds to the results obtained during training on our VAEs. We add an intercept for the regression.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/concatenation-lucas.jpg" title="Latent space concatenation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Concatenation matched given the coordinates of the LUCAS Dataset
</div>

### Step 6: Regression and Analysis

In the final step, we use a regression model to predict the Organic Carbon content from the concatenated features of latent vectors and geographical data. The regression model is trained to minimize the RMSE between the predicted and actual Organic Carbon values, providing a direct assessment of prediction accuracy. We leverage the deep features learned by the convolutional VAEs in order to regress the value of the data collected from the LUCAS survey.

We first remove the values with correlations above 0.5.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/correlation-matrix.jpg" title="Correlation matrix" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Correlation Matrix of the Variables on the Concatenated Latent Space of the 5 Raster bands (size 160)
</div>

After pruning the X matrix from variable pairs with a high correlation, we run a first model, and remove the variables with a p-value above 0.01 for statistical significance under H0 (that the coefficient is equal to 0). We can see below the result of this regression with 26 statistically significant variables of all latent spaces.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/regression-results.jpg" title="Regression results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Result of the regression after feature selection on anonymous variables of the latent space
</div>

---

## Evaluation and Results

Upon evaluation, the model demonstrates significant predictive capability, as evidenced by low RMSE scores on a validation set. This indicates that the convolutional VAE effectively captures and utilizes the complexities of both the spatial and spectral data to estimate SOC. These results underscore the potential of integrating advanced Machine Learning models with traditional soil survey data to revolutionize SOC monitoring and analysis. This approach not only improves the scalability and efficiency of Organic Content estimation but also enhances the accuracy and applicability of the results in real-world scenarios.

---

## Significant Results and Implications

The convolutional VAE model's latent space showed significance when regressing for OC in predicting Organic Carbon from satellite images. This proof of concept opens several avenues:

**Scalability:** This method can be scaled to monitor Organic Carbon Content across vast areas, providing critical data for environmental and agricultural management.

**Cost Efficiency:** AI-driven approaches reduce the need for extensive physical sampling, lowering the costs and labor involved in SOC monitoring.

**Policy Making:** Reliable and timely SOC data can inform better policies for land use and climate change mitigation.

### Enhancing Model Insights: Statistical Significance and Proof of Concept

These variables, derived from the model's encoder, are lower manifold representations of the input data and are integral to understanding and predicting soil organic carbon (SOC) content. Statistical tests confirm that these latent variables significantly contribute to the regression model's predictive accuracy, demonstrating their relevance and utility in capturing meaningful information from the raster data.

One of the notable capabilities of the Convolutional VAE is its effectiveness in denoising and extracting useful information from noisy data sources, such as satellite imagery, especially when averaged out over a year. This attribute is particularly valuable in remote sensing, where data often contain various types of noise due to atmospheric conditions, sensor inaccuracies, or other environmental factors.

---

## Conclusion

The convolutional VAE using raster bands for Organic Carbon estimation is a promising tool in environmental science. This proof of concept not only showcases the feasibility of using AI for soil analysis but also sets the stage for more advanced applications in remote sensing and ecological monitoring. As we continue to refine these models, we can gain a greater understanding of our climate and predict and prescribe solutions accordingly.

This work demonstrates that generative AI models, specifically VAEs, have substantial potential in addressing sustainability challenges. By combining satellite data, advanced machine learning techniques, and traditional soil surveys, we can create scalable, cost-effective solutions for monitoring and managing soil health on a global scale.
