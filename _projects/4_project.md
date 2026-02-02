---
layout: page
title: Market Basket Analysis
description: Analyzing seasonal changes in consumer behavior using the Apriori algorithm
img: /assets/img/Basket.webp
importance: 1
category: data science
---

## Market Basket Analysis Algorithm: Change in Consumer Behaviour across Seasons

We're diving into the world of Market Basket Analysis (MBA) using the Apriori algorithm. Our goal? To understand how shopping habits change with the seasons. The Apriori algorithm helps us spot patterns in large sets of data, making it perfect for this job. We want to see how the shopping habits shift during the seasons.

We're working with an open-source dataset from Kaggle for this project, using it to explore Market Basket Analysis. This method helps spots trends in popular purchases, which can guide business strategies. We'll be using the apriori algorithm to see how seasons influence what groceries people buy. But first, we need to clean up the data.

**Resources:**

- Original dataset: [Kaggle Dataset](https://www.kaggle.com/)
- Code repository: [GitHub - Market Basket Season Analysis](https://github.com/ValerianFourel/MarketBasketSeasonAnalysis)

---

## What is Market Basket Analysis?

Market Basket Analysis is a data mining technique that identifies patterns in aggregate customer purchasing behavior by analyzing items frequently bought together. It helps businesses optimize marketing strategies and inventory management.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mba-transactions-example.jpg" title="Example of simple transactions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of simple transactions showing how items are purchased together
</div>

### Key Metrics

**Support:**  
Support measures how frequently an item or set of items appears in transactions. It helps quantify the likelihood of an event occurring in a dataset, such as two items being bought together.

For example, if bananas and apples appeared together in 2 out of 4 transactions, then Support (banana, apple) = 0.5 as 50% of transactions included both bananas and apples.

**Confidence:**  
Confidence represents the conditional probability that an item will be purchased given that another item is already in the basket. It helps determine the strength of the rule between two items.

For instance, if bananas appeared in 3 out of 4 transactions, and bananas and apples appeared together in 2 of those, then Confidence (banana → apple) = 0.67, as 66.7% of customers who bought bananas also bought apples. However, high confidence alone doesn't imply a strong association between two items.

**Lift:**  
Lift helps determine whether the co-occurrence of two items is purely by chance or if there's a meaningful association. It compares the observed support of two items to what we would expect if they were independent.

The interpretation of lift is as follows:

- **Lift = 1:** Items appear together purely by chance, with no significant association.
- **Lift > 1:** Items are more likely to be purchased together than expected, indicating a strong association.

By using support, confidence, and lift together, businesses can uncover valuable insights into customer purchasing patterns and optimize strategies accordingly.

---

## Step 1: Division of In-Season and Out-Season Data

We first separate the full basket into 4, one for each season.

```python
def rulesCV(baskets, min_support=min_support, min_threshold=min_threshold):
    # We make CV fold of the association rules

    rulesMainFold = []  # This will be the list of our MainFolds
    rulesTestFold = []  # This will be the list of our Test Folds

    for basket in range(len(baskets)):
        concatenatedBasket = pd.concat(np.array(np.delete(baskets, basket), dtype=object))
        # Concatenate our "MainFold"

        print(tuple(map(sum, zip(concatenatedBasket.shape, baskets[basket].shape))))
        # This print statement helps us visualize that all transactions are taken into account

        mainFold = analysisMaker(concatenatedBasket, min_support=min_support, min_threshold=min_threshold)
        testFold = analysisMaker(baskets[basket], min_support=min_support, min_threshold=min_threshold)

        rulesMainFold.append(mainFold)
        rulesTestFold.append(testFold)

    return rulesMainFold, rulesTestFold
```

The `analysisMaker` function processes a DataFrame by filling missing values, transforming the data into a list format, and preparing it for association rule mining using the Apriori algorithm.

The `rulesCV` function performs cross-validation on baskets of transaction data, generating association rules for both training (MainFold) and test sets (TestFold), then returns the discovered rules based on support and lift thresholds.

The TestFold is for the particular season we are verifying whether the behaviour of the rules is different from the rest of the year.

---

## Step 2: Breslow-Day Test using Chi-Square Distribution

We used the Chi-Square test for statistical hypothesis testing, focusing on paired variables (A and B). The test relies on a contingency table, which captures the four possible boolean combinations of A and B. Each cell represents the number of samples meeting its combination, calculated from the sample size and observed probabilities.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/contingency-table.jpg" title="Contingency table" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Contingency Table for the rule (A ⇒ B) using lift, support and confidence with "A bar" and "B bar" representing the absence of A and B, respectively.
</div>

The null hypothesis of the Breslow-Day Test is that the odds ratios for the k strata are all equal. When the null hypothesis is true, the statistic has an asymptotic chi-square distribution with k-1 degrees of freedom.

To test if an association rule behaves differently between a specific season and the rest of the year, we conducted a homogeneity test. By comparing the Test Fold (one season) with the Main Fold (other seasons), we checked if both populations follow the same distribution.

---

## Step 3: Results and Analysis of Seasonal Behaviour

To compare the statistical significance of the overlapping rules, a Chi-square critical value of 2.706 for the alpha of 0.10 for 1 degree of freedom is set. We use a k x 2 x 2 table for the Breslow-Day Test, with k being the number of populations compared and k — 1 degree of freedom.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/seasonal-rules-chart.jpg" title="Seasonal rules distribution" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/statistical-significance.jpg" title="Statistical significance proportions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Almost half of the rules in each season are unique to the given season. Most overlapping rules do not show statistically significant distributional differences.
</div>

### Key Findings

The pie charts represent statistically significant rules that behave differently across seasons. Most of these rules exhibit a **High Lift Ratio (Lift ≥ 1.4)**, indicating strong associations where items are purchased together more often than expected. This pattern is consistent across all seasons.

Between 18 and 37% of Statistically Significant Rules have **Low Lift Ratio (Lift ≤ 0.6)**, indicating a weak or negative association between items.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/lift-ratio-analysis.jpg" title="Lift ratio distribution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proportions of Statistically Significant rules among Rules present in all Seasons
</div>

We compared all 128 statistically significant rules across all seasons to see how they act for each season. Usually, significant rules are only so in one season, with **Summer being the season that has the most significant rules**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/seasonal-comparison.jpg" title="Seasonal rule comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of 128 statistically significant rules across all seasons
</div>

---

## Limitations

The issues of our study arise from the nature of the Chi-Square tests for the Apriori Algorithm, in which the main method is based on contingency tables. Since P(A ∩ B) is equal to P(B ∩ A), the Chi-square value remains the same between the rules A ⇒ B or B ⇒ A. The problem remained when we used the Breslow-Day Test, which is based on computations made from odds rather than frequencies.

It is difficult to determine whether the relative performance of a rule influences its Chi-square value because it is also affected by the performance of P(negative B ∩ negative A), i.e., the performance of all other rules. We chose confidence as our primary metric because confidence is not symmetric from rule A to rule B.

To measure the performance of a rule in a particular season, we have divided its confidence in the test season by the other three seasons' confidence. As a result, we cannot guarantee a high confidence ratio, and the performance of a rule in a season compared to the three other seasons (the main fold) leads to statistical significance.

The Breslow-Day-Test requires at least 80% of the expected cell counts to be greater than 5, with a large sample size in each K stratum. Some products purchased infrequently may produce biased results.

---

## Conclusion

This project demonstrates how Market Basket Analysis combined with statistical hypothesis testing can reveal meaningful seasonal patterns in consumer purchasing behavior. The findings can help retailers optimize inventory management, promotional strategies, and product placement based on seasonal shopping trends.
