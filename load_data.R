## The following code requires the R libraries
#   here
#   dplyr
#   readr
##

library(dplyr)

readr::read_delim(here::here("data/ld5.txt"), delim = " ",
                  trim_ws = TRUE,
                  col_names = c("id","block","trial",
                                "stim","resp","rt","correct"),
                  col_types = "iiiiidi") %>%
  mutate(id = factor(id),
         correct = !correct, # Weirdly, 0 is "correct" in file
         stim = case_when(
           stim %in% 0:2 ~ stim + 2L,
           stim %in% 3:5 ~ stim + 3L,
           TRUE ~ NA_integer_
         )) -> ld5

