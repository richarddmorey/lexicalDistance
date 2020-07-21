# Lexical Distance

Please cite as:

Rouder, J.N., Lu, J., Speckman, P. et al. (2005) A hierarchical model for estimating response time distributions. *Psychonomic Bulletin & Review* **12**, 195–223. https://doi.org/10.3758/BF03257252

This repository contains data from a cognitive experiment performed in the mid-2000s. 

For experimental details, an interactive example of the task, and data column descriptions see https://richarddmorey.github.io/lexicalDistance/.

## *Super* quick start

1. Go to https://richarddmorey.github.io/lexicalDistance/.

2. At the bottom of the page, click the orange "Download tidied data" button.

3. Open the `.csv` file in your analysis program of choice.

## Quick start for R users

1. Download the repository using the green button to the top right. Choose "Download ZIP".

![Choose "Download ZIP"](https://raw.githubusercontent.com/richarddmorey/lexicalDistance/master/explainer/include/img/download_code.png)

2. Unzip the repository and open up the RStudio project `lexicalDistance.Rproj`.

3. Install the necessary packages:

```
install.packages(c("here", "dplyr", "readr"))
```

4. Run the code in `load_data.R`. The data will be in a tibble called `ld5`, ready for analysis.

## Contents:

| Item         | Description                             |
|:-------------|:----------------------------------------|
| `load_data.R`| R code to load the data
| `data`       | Contains all data file `ld5.txt`                   |
| `explainer`  | Contains the Rmarkdown code to generate the website describing the data |
| `docs`       | GitHub pages folder containing compiled explainer document |




