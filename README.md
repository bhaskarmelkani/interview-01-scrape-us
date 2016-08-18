# Step to run the code.
* `npm install`
* `node index.js`
# INTRODUCTION
This project is our first technical test for you, our future KFit engineer.
Your job is to write a Ruby script to scrape KFit partners in Kuala Lumpur and store the result in CSV file.

# INSTRUCTION
Clone this repo.

Create your own feature branch.

Store these details in the CSV file:
`city, partner name, address, latitude, longitude, average rating`

Save the script as `get_kfit.rb` and output the result to `kfit_partners.csv`. We should be able to run it with this command `ruby get_kfit.rb`. 

Make as many commits as needed.

When you are ready, make a pull request in Github.

# BONUS POINT
Yes, we have a hidden level! For the bonus point, include partner's `phone number` in the CSV file.

# EXAMPLE PARTNER

For this [partner](https://access.kfit.com/partners/517?city=kuala-lumpur), we would expect the CSV file to be:

```
city, partner name, address, latitude, longitude, average rating
Kuala Lumpur, HOT YO STUDIO, "26-2 (Second Floor), Jalan 24/70A, Desa Sri Hartamas, 50480 W.P. Kuala Lumpur (opposite Burger King Hartamas)", 3.162909, 101.650887, 4.5
```

CSV with bonus point:
```
city, partner name, address, latitude, longitude, average rating, phone number
Kuala Lumpur, HOT YO STUDIO, "26-2 (Second Floor), Jalan 24/70A, Desa Sri Hartamas, 50480 W.P. Kuala Lumpur (opposite Burger King Hartamas)", 3.162909, 101.650887, 4.5, "+60362113263"
```

It doesn't have to be 100% similar CSV format, what important is you are able to write down partner's details.
