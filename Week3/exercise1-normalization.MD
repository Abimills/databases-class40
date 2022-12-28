## 1 What columns violate 1NF?
a) column (member_id )violates 1NF because its suppose to be unique as a PK which would help to identify every row but there is repetitions there.
b) column (dinner-date) has a wrong date entry data
c)food_code and food_description are  not using atomic values.


## 2 What entities do you recognize that could be extracted?

The following entities can be extracted :
a)member
b)dinner
c)venue
d)food

## 3 Name all the tables and columns that would make a 3NF compliant solution

a) members table
| member_id PK AUTO_INCREMENT | member_name | member_address |

b) dinner table
| dinner_id PK AUTO_INCREMENT | dinner_date | venue_id FK | food_id FK |

c) venue table
| venue_id PK AUTO_INCREMENT | venue_code | venue_description |

c) food table
| food_id PK AUTO_INCREMENT | food_code | food_description |

d)member_dinner table
|member_dinner_id | member_id | dinner_id FK |venue_id FK | food_id FK | 