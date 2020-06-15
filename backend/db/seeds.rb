# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



base_url = "https://acnh-tracker-imgs.s3.amazonaws.com/"

# should prob render them in this order

Visitor.create(name: "Daisy Mae", img: base_url + "daisy_mae.png")
Visitor.create(name: "K.K.", img: base_url + "kk.png")  
Visitor.create(name: "Kicks", img: base_url + "kicks.png")
Visitor.create(name: "Leif", img: base_url + "leif.png")
Visitor.create(name: "Sahara", img: base_url + "sahara.png")
Visitor.create(name: "C.J.", img: base_url + "cj.png")
Visitor.create(name: "Flick", img: base_url + "flick.png")
Visitor.create(name: "Gulliver", img: base_url + "gulliver.png")
Visitor.create(name: "Redd", img: base_url + "redd.png")
Visitor.create(name: "Label", img: base_url + "label.png")
Visitor.create(name: "Celeste", img: base_url + "bae.png")
Visitor.create(name: "Wisp", img: base_url + "wisp.png")
