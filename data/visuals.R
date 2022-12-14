library("dplyr")
library("tidyr")
library("ggplot2")

wc <- read.csv("World Cup Country Statistics.csv", stringsAsFactors = FALSE)

c1_data <- wc %>% filter(BORN_IN_VS_NAT != "")

chart1 <- ggplot(data = c1_data, aes(x = BORN_IN_VS_NAT, y = reorder(COUNTRY, -BORN_IN_VS_NAT))) +
  geom_bar(stat = "identity", color = "black") +
  labs(
    x = "Ratio of Players Born Country in vs Size of National Team",
    y = "Countries",
    title = "Ratio of Players Born in the Country vs National Team",
    caption = "This chart can indicate countries who may be exporting players versus countries
    who are getting players through various eligibility rules"
  ) +
  theme(plot.title = element_text(hjust = 0.5)) +
  scale_x_continuous(breaks = seq(0, 2.5, by = .1))

c2_data <- wc %>% filter(PFB_NAT_PCTG != "")

chart2 <- ggplot(data = c2_data, aes(x = PFB_NAT_PCTG, y = reorder(COUNTRY, -PFB_NAT_PCTG))) +
  geom_bar(stat = "identity", color = "black") +
  labs(
    x = "Percentage of Players in the National Team born for the same country",
    y = "Countries",
    title = "How many players of a National Team are born in the same country?"
  ) +
  theme(plot.title = element_text(hjust = 0.5)) +
  scale_x_continuous(breaks = seq(0, 1.0, by = .1))

# c3_data <- wc %>% arrange(TOT_WC_PCTG) %>% tail(10)
# print(c3_data)
# chart3 <- ggplot(c3_data, aes(x="", y = TOT_WC_PCTG, fill = COUNTRY)) +
#   geom_bar(stat="identity", width=1) +
#   coord_polar("y", start=0) +
#   labs(
#     title = "Monthly Active Users of Each Social Media App, in Billions"
#   ) +
#   theme_void() +
#   theme(plot.title = element_text(hjust = 0.5))

# print(chart3)