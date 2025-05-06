import React from "react";
import { useState } from "react";
import "./Produktet.css";
import { useNavigate } from "react-router-dom";

const objects = [
  {
    id: 1,
    type: "Dogs",
    name: "Rocky",
    image:
      "https://warsawdog.com/wp-content/uploads/2021/06/labrador-retriever.jpg",
    age: "4",
    bio: "Friendly, outgoing, and great with families",
    breed: "Labrador Retriever",
    price: "300$",
  },
  {
    id: 2,
    type: "Dogs",
    name: "Maximus",
    image:
      "https://royvon.co.uk/wp-content/uploads/2017/01/GermanShepherdTips.jpg",
    age: "7",
    bio: "Loyal, courageous, and protective",
    breed: "German Shepherd",
    price: "600$",
  },
  {
    id: 3,
    type: "Dogs",
    name: "Bella",
    image:
      "https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/images/blog/breed-spotlight/Golden-retriever-thumbnail.webp",
    age: "5",
    bio: "Gentle, friendly, and loves kids",
    breed: "Golden Retriever",
    price: "500$",
  },
  {
    id: 4,
    type: "Dogs",
    name: "Charlie",
    image:
      "https://blog.myollie.com/wp-content/uploads/2020/02/beagle-puppy-running-through-a-yard-with-a-ball-in-his-mouth.jpg",
    age: "3",
    bio: "Playful and intelligent",
    breed: "Beagle",
    price: "700$",
  },
  {
    id: 5,
    type: "Dogs",
    name: "Daisy",
    image:
      "https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/poodle-breeds-min.webp",
    age: "6",
    bio: "Energetic, affectionate, and loves to run",
    breed: "Poodle",
    price: "600$",
  },

  {
    id: 6,
    type: "Cats",
    name: "Whiskers",
    image:
      "https://t3.ftcdn.net/jpg/01/28/45/82/360_F_128458289_B16Vtnp7kwALTBFGmhL4Ykqfmt2ocrae.jpg",
    age: "3",
    bio: "Curious, playful, and loves attention",
    breed: "Siamese",
    price: "100$",
  },
  {
    id: 7,
    type: "Cats",
    name: "Luna",
    image:
      "https://i.pinimg.com/564x/d1/e6/f6/d1e6f6054e75253b121edb25f0322dc7.jpg",
    age: "4",
    bio: "Sweet, calm, and a little shy",
    breed: "British Shorthair",
    price: "200$",
  },
  {
    id: 8,
    type: "Cats",
    name: "Mittens",
    image:
      "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/NDowMDAwMDAwMDAwMDYyOTgx/silver-maine-coon.jpg",
    age: "2",
    bio: "Playful, vocal, and loves to explore",
    breed: "Maine Coon",
    price: "200$",
  },
  {
    id: 9,
    type: "Cats",
    name: "Oliver",
    image:
      "https://www.thesprucepets.com/thmb/Mbstii_Tl2KoD-EcJtMAZJ3PPVY=/1080x0/filters:no_upscale():strip_icc()/49748610_986486438204237_6777699179942274812_n-5c4b811fc9e77c0001f32142.jpg",
    age: "5",
    bio: "Loves cuddles and enjoys sunbathing",
    breed: "Persian",
    price: "600$",
  },
  {
    id: 10,
    type: "Cats",
    name: "Leo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguIN_i99mW-iYlBcG-1L8_6OLKZdX9BNkDQ&s",
    age: "6",
    bio: "Independent, calm, and observant",
    breed: "Ragdoll",
    price: "400$",
  },

  {
    id: 11,
    type: "Rabbits",
    name: "Flopsy",
    image:
      "https://critterculture.mblycdn.com/uploads/cc/2020/09/shutterstock_1713833734_1440x964_acf_cropped.jpg",
    age: "1",
    bio: "Cuddly, gentle, and loves being petted",
    breed: "Holland Lop",
    price: "100$",
  },
  {
    id: 12,
    type: "Rabbits",
    name: "Bunny",
    image:
      "https://media.istockphoto.com/id/135624969/photo/young-rabbit.jpg?s=612x612&w=0&k=20&c=d_UhonJh0CJM8t3tYjP3Rhfi3RAbMWo0ba6zWX2se00=",
    age: "2",
    bio: "Curious, friendly, and loves to hop around",
    breed: "Mini Rex",
    price: "90$",
  },
  {
    id: 13,
    type: "Rabbits",
    name: "Thumper",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2022/03/white-angora-rabbit-on-grass.jpeg",
    age: "4",
    bio: "Playful and loves digging",
    breed: "Angora",
    price: "80$",
  },
  {
    id: 14,
    type: "Rabbits",
    name: "Snowball",
    image:
      "https://pethelpful.com/.image/w_3840,q_auto:good,c_limit/MTc0OTY4MjIwOTM4MTUxMzY0/bunny-breed-guide-mini-lop-rabbits.jpg",
    age: "1",
    bio: "Quiet, friendly, and loves fresh veggies",
    breed: "Mini Lop",
    price: "70$",
  },
  {
    id: 15,
    type: "Rabbits",
    name: "Coco",
    image:
      "https://cdn-fastly.petguide.com/media/2022/02/16/8214533/himalayan-rabbit.jpg?size=720x845&nocrop=1",
    age: "3",
    bio: "Calm, loves to cuddle",
    breed: "Himalayan",
    price: "100$",
  },

  {
    id: 16,
    type: "Parrots",
    name: "Sunny",
    image:
      "https://images.birdfact.com/production/scarlet-macaw.jpg?w=1800&h=1350&q=80&auto=format&fit=crop&dm=1730753664&s=f53d928c2dc4cee55c7ea8bd5b50e21b",
    age: "2",
    bio: "Social, loves to talk",
    breed: "Macaw",
    price: "150$",
  },
  {
    id: 17,
    type: "Parrots",
    name: "Polly",
    image:
      "https://www.versele-laga.com/-/media/VerseleLaga-Tenant/Canada-Site/Articles/Storychief/448053163/amazonepapegaai_1920x1280_ae3fc9acb5bcbb0552098c36d1223ea1.ashx",
    age: "3",
    bio: "Friendly, loves to mimic sounds",
    breed: "Amazon Parrot",
    price: "180$",
  },
  {
    id: 18,
    type: "Parrots",
    name: "Rio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHexvk7vW5hMVDdzSXudOEkfE-iwY7sTKfA&s",
    age: "4",
    bio: "Colorful and energetic",
    breed: "Sun Conure",
    price: "100$",
  },
  {
    id: 19,
    type: "Parrots",
    name: "Charlie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXoR7tXy6oGYerO2vuu4X_y4jHk6d0m1MtQ&s",
    age: "1",
    bio: "Vocal, loves to sing",
    breed: "African Grey",
    price: "90$",
  },
  {
    id: 20,
    type: "Parrots",
    name: "Kiwi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5nIw9RBelVRFsa0RMXs3vY5DdBbzujM6gA&s",
    age: "2",
    bio: "Loves to imitate sounds and has a playful attitude",
    breed: "Cockatiel",
    price: "80$",
  },

  {
    id: 21,
    type: "Dogs",
    name: "Sadie",
    image:
      "https://image.petmd.com/files/inline-images/english-bulldog-5.jpg?VersionId=1KyTFgo4HZwpAcjf.WZ8mM_2yt6f9Zc3",
    age: "4",
    bio: "Loyal and great with kids",
    breed: "Bulldog",
    price: "450$",
  },
  {
    id: 22,
    type: "Dogs",
    name: "Finn",
    image:
      "https://www.bil-jac.com/wp-content/uploads/2024/12/beagle2-184102750.webp",
    age: "7",
    bio: "Energetic, brave, and affectionate",
    breed: "Beagle",
    price: "400$",
  },
  {
    id: 23,
    type: "Cats",
    name: "Gizmo",
    image:
      "https://image.petmd.com/files/styles/863x625/public/2023-04/bengal-cat-breed.jpg",
    age: "3",
    bio: "Mischievous and fun-loving",
    breed: "Bengal",
    price: "370$",
  },
  {
    id: 24,
    type: "Cats",
    name: "Zara",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gOMjQl0xqO7jT2NOinmF7sm1t7aG-7l1Xw&s",
    age: "4",
    bio: "Affectionate and loves attention",
    breed: "Sphynx",
    price: "390$",
  },
  {
    id: 25,
    type: "Rabbits",
    name: "Oreo",
    image:
      "https://i.pinimg.com/474x/f8/92/b0/f892b064091f6e73bef278806a88041c.jpg",
    age: "1",
    bio: "Curious and loves exploring",
    breed: "English Angora",
    price: "300$",
  },

  {
    id: 26,
    type: "Parrots",
    name: "Jade",
    image:
      "https://www.thesprucepets.com/thmb/vydH2Mqnlb_kPjl6MYLbvGOrvsI=/5041x0/filters:no_upscale():strip_icc()/GettyImages-10092417-58a6e9363df78c345b622504.jpg",
    age: "2",
    bio: "Loves to entertain and talk",
    breed: "Macaw",
    price: "100$",
  },
  {
    id: 27,
    type: "Dogs",
    name: "Duke",
    image:
      "https://post.bark.co/wp-content/uploads/2022/05/iStock-1223511966.jpg",
    age: "5",
    bio: "Strong and loyal",
    breed: "Doberman",
    price: "350$",
  },
  {
    id: 28,
    type: "Dogs",
    name: "Milo",
    image:
      "https://t3.ftcdn.net/jpg/00/15/59/70/360_F_15597098_JrRcwScsZ9h3bi2WmStErDqdigWTF6yO.jpg",
    age: "3",
    bio: "Playful and affectionate",
    breed: "Cocker Spaniel",
    price: "200$",
  },
  {
    id: 29,
    type: "Cats",
    name: "Cleo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-abnXDisx57-RSoiRXx2VOIS0L_nJyoTuw&s",
    age: "5",
    bio: "Adventurous and loves climbing",
    breed: "Persian",
    price: "300$",
  },
  {
    id: 30,
    type: "Rabbits",
    name: "Pip",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCqxaXezs6Cv4IFrf3uZbGRp7d-RW6r-Csw&s",
    age: "2",
    bio: "Quiet and sweet",
    breed: "Himalayan",
    price: "100$",
  },

  {
    id: 31,
    type: "Parrots",
    name: "Mango",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJlf-S2WsMiZ6fbN32nMC-DNNc6MUBnkJcQ&s",
    age: "4",
    bio: "Loves to talk and sing",
    breed: "Sun Conure",
    price: "200$",
  },
  {
    id: 32,
    type: "Dogs",
    name: "Buddy",
    image:
      "https://people.com/thmb/5uLym456xzuJ5MwbPIdTJiyGoSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(904x0:906x2)/pug-1-0d4c0f988e3d421ca4954917b1450664.jpg",
    age: "2",
    bio: "Loyal and energetic",
    breed: "Pug",
    price: "380$",
  },
  {
    id: 33,
    type: "Rabbits",
    name: "Peanut",
    image:
      "https://media.istockphoto.com/id/1155953827/photo/mini-rex.jpg?s=612x612&w=0&k=20&c=WMeWp2F6MFRKZglrMXydb3zuajsapKldBBHHKpO6oSA=",
    age: "1",
    bio: "Playful and loves attention",
    breed: "Mini Rex",
    price: "70$",
  },
  {
    id: 34,
    type: "Parrots",
    name: "Echo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HrF4NwNnCSh8ecbHAZzG50BLNp1gRfanIA&s",
    age: "3",
    bio: "Talkative and fun",
    breed: "African Grey",
    price: "100$",
  },
  {
    id: 35,
    type: "Dogs",
    name: "Rex",
    image:
      "https://media.istockphoto.com/id/1064733482/photo/rottweiler.jpg?s=612x612&w=0&k=20&c=AfrJyy-eh4ZECUKB_IkAda6mI1Ol0pYeFK7y5AlYbEA=",
    age: "4",
    bio: "Alert, brave, and loyal",
    breed: "Rottweiler",
    price: "500$",
  },

  {
    id: 36,
    type: "Cats",
    name: "Patches",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROD2suS4IK9NVSViwsosPP-KZgAS9Zdyx5JQ&s",
    age: "3",
    bio: "Gentle and playful",
    breed: "Tabby",
    price: "200$",
  },
  {
    id: 37,
    type: "Rabbits",
    name: "Fluff",
    image: "https://media-be.chewy.com/wp-content/uploads/mini-rex-main.jpg",
    age: "2",
    bio: "Loves cuddles and enjoys fresh veggies",
    breed: "Mini Rex",
    price: "100$",
  },
  {
    id: 38,
    type: "Dogs",
    name: "Lucy",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b3fc87b45776e887e966e82/ea4b3853-7558-4048-8051-d986e71ec39d/beagle-on-meadow-2021-08-26-15-58-22-utc.jpg",
    age: "4",
    bio: "Loves attention and is very affectionate",
    breed: "Beagle",
    price: "370$",
  },
  {
    id: 39,
    type: "Parrots",
    name: "Ruby",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZSwpAoLSwGHw13V93Z8KwLgg8CBKNwDA_w&s",
    age: "5",
    bio: "Vibrant, playful, and friendly",
    breed: "Scarlet Macaw",
    price: "280$",
  },
  {
    id: 40,
    type: "Cats",
    name: "Chester",
    image:
      "https://cattime.com/wp-content/uploads/sites/14/2011/12/GettyImages-1361978700-e1698268542248.jpg",
    age: "2",
    bio: "Energetic and loves playing",
    breed: "Siberian",
    price: "260$",
  },

  {
    id: 41,
    type: "Parrots",
    name: "Jasmine",
    image:
      "https://www.thesprucepets.com/thmb/MhizOAedoNxo1Owzt4TktRPMMfM=/2724x0/filters:no_upscale():strip_icc()/parakeet-97839520-5b4d67f9c9e77c003725a47b.jpg",
    age: "3",
    bio: "Sweet, loves to sing",
    breed: "Budgie",
    price: "100$",
  },
  {
    id: 42,
    type: "Rabbits",
    name: "Hazel",
    image:
      "https://static.wixstatic.com/media/137710_def5fc96ca8143cf9075d1e5ca506600~mv2.jpg/v1/crop/x_0,y_172,w_2360,h_2033/fill/w_468,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6826_edited_edited.jpg",
    age: "2",
    bio: "Calm and loves a good nap",
    breed: "Mini Lop",
    price: "140$",
  },
  {
    id: 43,
    type: "Dogs",
    name: "Ziggy",
    image:
      "https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors.jpg",
    age: "5",
    bio: "Affectionate and great with families",
    breed: "Golden Retriever",
    price: "400$",
  },
  {
    id: 44,
    type: "Parrots",
    name: "Blue",
    image:
      "https://www.thesprucepets.com/thmb/55Xk2F-Sgk65lETxp0nlJIF9Jl0=/2737x0/filters:no_upscale():strip_icc()/budgerigar-parakeet-182203416-58ad972a5f9b58a3c97ae4ce.jpg",
    age: "2",
    bio: "Colorful, energetic, and loves to chirp",
    breed: "Budgie",
    price: "70$",
  },
  {
    id: 45,
    type: "Turtles",
    name: "Shelly",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbUmLXhDtyirItJ89rqX0rNF5OO8rbhnSaQ&s",
    age: "3",
    bio: "Loves swimming and basking in the sun.",
    breed: " Red-Eared Slider",
    price: "300$",
  },

  {
    id: 46,
    type: "Fishes",
    name: "Finn",
    image: "https://home.adelphi.edu/~ve21375/betta%20fish%20home%201.jpg",
    age: "2",
    bio: "A vibrant, energetic swimmer with stunning fins.",
    breed: "Betta Fish",
    price: "170$",
  },
  {
    id: 47,
    type: "Hamsters",
    name: "Shadow",
    image:
      "https://thumb.photo-ac.com/74/74551287124762d4eab47a0eb5e766ff_t.jpeg",
    age: "1",
    bio: "Calm and enjoys quiet time.",
    breed: "Black Bear Hamster",
    price: "100$",
  },
  {
    id: 48,
    type: "Turtles",
    name: "Tank",
    image:
      "https://cdn1.bigcommerce.com/server700/6bee4/products/72/images/222/BabyRussian1__95192.1266727271.1280.1280.JPG?c=2",
    age: "6",
    bio: "A tiny digger who enjoys sunbathing",
    breed: " Russian Tortoise",
    price: "300$",
  },
  {
    id: 49,
    type: "Cats",
    name: "Misty",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue.jpg",
    age: "5",
    bio: "Calm and loves cuddles",
    breed: "Russian Blue",
    price: "200$",
  },
  {
    id: 50,
    type: "Hamsters",
    name: "Ziggy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxBsX6ddrO8jM4Zk5sBPi044PGwm0yPEn-g&s",
    age: "2",
    bio: "Quick and playful, loves to explore.",
    breed: "Roborovski Hamster",
    price: "100$",
  },

  {
    id: 51,
    type: "Fishes",
    name: " Nemo",
    image:
      "https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF-1200-80.jpg",
    age: "2",
    bio: " Playful and loves hiding in anemones.",
    breed: "Clownfish",
    price: "100$",
  },
  {
    id: 52,
    type: "Hamsters",
    name: "Oreo",
    image:
      "https://dwarfhamsterguide.com/wp-content/uploads/2017/10/Dwarf-hamster-inside-cage.jpg",
    age: "2.5",
    bio: "Curious, loves hiding food.",
    breed: "Campbells Dwarf Hamster",
    price: "150$",
  },
  {
    id: 53,
    type: "Hamsters",
    name: "Cinnamon",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBYwdaTU9D3TWH7Sx_vwgvJThQt9rFIgixw&s",
    age: "1",
    bio: "Friendly, loves to climb.",
    breed: " Chinese Hamster",
    price: "230$",
  },
  {
    id: 54,
    type: "Fishes",
    name: "Goldie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmEeKJ6tWYkj4SZvUY7Y5FdkIETwTTPFPrA&s",
    age: "3",
    bio: "Gentle and loves swimming in circles.",
    breed: "Goldfish",
    price: "150$",
  },
  {
    id: 55,
    type: "Turtles",
    name: "Sahara",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNxLz465pUUnYC1MOWNn_5DbSNHTGfBt5yg&s",
    age: "6",
    bio: "Slow, steady, and full of charm.",
    breed: "Eastern Box Turtle",
    price: "200$",
  },

  {
    id: 56,
    type: "Fishes",
    name: "Serenity",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4lO4FF3UfCnTZucdKesmiAk1ITwebt3l8w&s",
    age: "2",
    bio: "Graceful and peaceful, glides through the water.",
    breed: "Angelfish",
    price: "80$",
  },
  {
    id: 57,
    type: "Hamsters",
    name: "Peanut",
    image: "https://a-z-animals.com/media/2022/12/iStock-1157798585.jpg",
    age: "2",
    bio: "Tiny and fast, always exploring.",
    breed: "Dwarf Hamster",
    price: "100$",
  },
  {
    id: 58,
    type: "Hamsters",
    name: "Squeaky",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwWjIa9lAfVQuZOebCe_giwjXY4puEsMgOw&s",
    age: "1",
    bio: "Active and loves running on his wheel.",
    breed: " Syrian Hamster",
    price: "250$",
  },
  {
    id: 59,
    type: "Turtles",
    name: "Bubbles",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzr9yjF9EuXb4bNYeS3gDl9CqkGw2r78zFQ&s",
    age: "4",
    bio: "Slow and enjoys sunbathing.",
    breed: "African Spurred Tortoidr",
    price: "100$",
  },
  {
    id: 60,
    type: "Fishes",
    name: "Sparky",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwCKChNNsdc4ybRLdPQG9iQQ98aPoW4PJVw&s",
    age: "1",
    bio: "Energetic and loves to interact.",
    breed: "Guppy",
    price: "200$",
  },

  {
    id: 61,
    type: "Dogs",
    name: "Max",
    image:
      "https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2F3A7E3dgHI3pcHG7NrJ4auj%2Ffed741fb7b86e1f0db02e06d5f1fbdd6%2FCane_Corso_Price.webp&w=3840&q=75",
    age: "2",
    bio: "Adventure is his middle name.",
    breed: "Cane Corso",
    price: "600$",
  },
  {
    id: 62,
    type: "Dogs",
    name: "Bianca",
    image:
      "https://cdn.prod.website-files.com/61424e4d194b43f2e03c009c/66a1f751d7b3e7b4afd48760_20240725_blog_thumbnail1.jpg",
    age: "3",
    bio: "Queen of naps and cuddles.",
    breed: "German Shepherd",
    price: "400$",
  },
  {
    id: 63,
    type: "Cats",
    name: "Stacy",
    image:
      "https://www.thesprucepets.com/thmb/s0QJBiO3jm7zxKL2truzU0_Ko0s=/5000x0/filters:no_upscale():strip_icc()/a-beautiful-fluffy-siamese-cat-with-blue-eyes-lies-on-the-windowsill-1032516376-ec8038b90e8e478785449d68fde25af7.jpg",
    age: "2",
    bio: "Loves to cuddle",
    breed: "Siamese",
    price: "200$",
  },
  {
    id: 64,
    type: "Dogs",
    name: "Coco",
    image:
      "https://www.animalbehaviorcollege.com/wp-content/uploads/2015/08/breed-spotlight-dalmatians.jpg",
    age: "4",
    bio: "Always chasing squirrels (and dreams).",
    breed: "Dalmatian",
    price: "500$",
  },
  {
    id: 65,
    type: "Dogs",
    name: "Nala",
    image:
      "https://jordandogtraining.com.au/wp-content/uploads/2025/01/AdobeStock_112207019-800x534.jpeg",
    age: "1",
    bio: "Loves fetch and belly rubs.",
    breed: "Shiba",
    price: "370$",
  },

  {
    id: 66,
    type: "Fishes",
    name: "Dory",
    image:
      "https://www.fishi-pedia.com/wp-content/uploads/2015/11/Guppy-Tuxedo-Silver.jpg",
    age: "2",
    bio: "Playful and loves hiding in anemones.",
    breed: "Guppy",
    price: "70$",
  },
  {
    id: 67,
    type: "Hamsters",
    name: "Niblet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmZf6Su6_aC7iHQB2L3YzfYozxeNRhrbUhA&s",
    age: "2",
    bio: "Lovely,cuddly and loves to run.",
    breed: "Dwarf Hamster",
    price: "100$",
  },
  {
    id: 68,
    type: "Dogs",
    name: "Sky",
    image:
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11161641/202106husky-dog-breed-1257560163-scaled-1.jpg",
    age: "1",
    bio: "Sweet, sassy, and smart.",
    breed: "Husky",
    price: "350$",
  },
  {
    id: 69,
    type: "Fishes",
    name: "Finley",
    image:
      "https://www.swelluk.com/media/catalog/product/r/e/red_goldfish.png?store=default&image-type=image",
    age: "2",
    bio: "Graceful and peaceful, glides through the water.",
    breed: "Goldfish",
    price: "50$",
  },
  {
    id: 70,
    type: "Dogs",
    name: "Coco",
    image:
      "https://cdn.prod.website-files.com/651577594cea61d37cb19467/65b8225942597a8be56fef9c_Chow%20Chow.jpg",
    age: "1",
    bio: " Queen of naps and cuddles.",
    breed: "Chow Chow",
    price: "400$",
  },
  {
    id: 71,
    type: "Cats",
    name: "Milka",
    image:
      "https://de.lassie.co/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fr208a72kad0m%2FXXU8TNWq11vJcG4rYsWZa%2F4489ff4f4f71c793f2faa4d2b92d0754%2FKattraser__2_.png&w=3840&q=75",
    age: "3",
    bio: "Curious, playful, and loves attention",
    breed: "British Shorthair",
    price: "100$",
  },
  {
    id: 72,
    type: "Cats",
    name: "Mochi",
    image: "https://cdn.mos.cms.futurecdn.net/PAyDK8eyvNTtwHXHeWTiiD.jpg",
    age: "4",
    bio: "Cute and loves to nap",
    breed: "Ragdoll",
  },
];

function ObjectList({ objects }) {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");
  return (
    <div className="card-container">
      {objects.map((objects) => (
        <div key={objects.id} className="card">
          <img
            src={objects.image || "https://via.placeholder.com/150"}
            alt={objects.name}
          />
          <div className="card-info">
            <h4>{objects.name}</h4>
            <p>Breed: {objects.breed}</p>
            <p>Age: {objects.age}</p>
            <p>Bio: {objects.bio}</p>
            <p id="price">Price: {objects.price}</p>
            <button onClick={goToContact}>Save Them!</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Produktet() {
  const [filter, setFilter] = useState("All");

  const filteredObjects =
    filter === "All"
      ? objects
      : objects.filter(
          (obj) => obj.type.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="product-list">
      <h1 id="title">These adorable pets are waiting to be saved!</h1>

      <div className="filter-buttons">
        {[
          "All",
          "Dogs",
          "Cats",
          "Rabbits",
          "Parrots",
          "Hamsters",
          "Turtles",
          "Fishes",
        ].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <ObjectList objects={filteredObjects} />
    </div>
  );
}

export default Produktet;
