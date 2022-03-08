
# import Brody from '../client/src/assets/brody.jpg'
# import Kato from '../client/src/assets/Kato.jpg'
# import Roman from '../client/src/assets/Roman.jpg'
 puts "Seeding..."

# Users
 u1= User.create(first_name: 'Alexandra', last_name: 'Weaver', username: 'aweaver', password: 'Hello123', state: 'Texas')
 u2 = User.create(first_name: 'Thomas', last_name: 'Weaver', username: 'tommytom', password: 'Oakley1', state: 'Alaska')

# Pets
p1 = Pet.create(name: 'Kato', species: 'Dog', image: 'https://i.postimg.cc/zDdqY0qB/Kato.jpg', breed: 'Doberman Pinscher', age: 4, gender: 'Male', personality: 'Timid', user_id: u1.id)

p2 = Pet.create(name: 'Roman', species: 'Dog', image: 'https://i.postimg.cc/fTpZJytQ/Roman.jpg', breed: 'German Short-Haired Pointer', age: 5, gender: 'Male', personality: 'Goofball!', user_id: u2.id)

p3 = Pet.create(name: 'Brody', species: 'Dog', image: 'https://i.postimg.cc/MH4kM3Gm/brody.jpg', breed: 'Doberman Pinscher', age: 1, gender: 'Male', personality: 'Rowdy AF', user_id: u1.id)

# Vaxxes
v1 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27", expiration_date: "2022-02-28", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p1.id)

v2 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u2.id, pet_id: p2.id)

v3 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p3.id)


# New seed/vax data creates an identical instance of pet

v4 = Vaccination.create(name: 'Parvo Vaccine', description: 'This vaccine protects against the parvo virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p1.id)

v5 = Vaccination.create(name: 'Parvo Vaccine', description: 'This vaccine protects against the parvo virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u2.id, pet_id: p2.id)

 puts "Seeding done!"