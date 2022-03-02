
# import Brody from '../client/src/assets/brody.jpg'
# import Kato from '../client/src/assets/Kato.jpg'
# import Roman from '../client/src/assets/Roman.jpg'
 puts "Seeding..."

# users
 u1= User.create(first_name: 'Alexandra', last_name: 'Weaver', username: 'aweaver', password: 'Hello123', state: 'Texas')
 u2 = User.create(first_name: 'Thomas', last_name: 'Weaver', username: 'tommytom', password: 'Oakley1', state: 'Alaska')

p1 = Pet.create(name: 'Kato', species: 'Dog', image: 'https://mail.google.com/mail/u/0?ui=2&ik=4388a39989&attid=0.1.1&permmsgid=msg-f:1726128064147009577&th=17f470543450b029&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_gJQIljFv1MLRKNUwmKnwnI_jNVbASAEIRcZtIbARtRqc856f_XYhd0WvvRVdKAupw2R94JNRmLe_G4Gdj6wpXzThuKyDXnD9_ADpXBFrdho13HZYtxaEwQ3Q&disp=emb', breed: 'Doberman Pinscher', age: 4, gender: 'Male', personality: 'Timid', user_id: u1.id)

p2 = Pet.create(name: 'Roman', species: 'Dog', image: 'https://mail.google.com/mail/u/0?ui=2&ik=4388a39989&attid=0.1.1&permmsgid=msg-f:1726137176340744070&th=17f4789dcd62c786&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_HsIw0e20vXY4F8MiA-daOOMCYBreNc9sWWzX0X6Mpou2GQN0p7xhepJY2Cgv0CmORLTTfAPCSEmUWH7YDkQBW7A_c7vkeEA6NZjAyWiU9B63hom33HkqTrsY&disp=emb', breed: 'German Short-Haired Pointer', age: 5, gender: 'Male', personality: 'Goofball!', user_id: u2.id)

p3 = Pet.create(name: 'Brody', species: 'Dog', image: 'https://mail.google.com/mail/u/0?ui=2&ik=4388a39989&attid=0.1.1&permmsgid=msg-f:1726137388175928291&th=17f478cf1fbf2be3&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_J9I1M8CD0g3H44eEeXBdK_VuKCYlwFY8VhPCjsuxLz7upXBgcMibQYg0GtNP0r7wSbPIkhsVcx37HycS48jMdb1CsoqiH66CtWg2QW0fzIjz6kIIJ08yhJDM&disp=emb', breed: 'Doberman Pinscher', age: 1, gender: 'Male', personality: 'Rowdy AF', user_id: u1.id)


v1 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p1.id)

v2 = v1 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u2.id, pet_id: p2.id)

v3 = v1 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p3.id)


 puts "Seeding done!"