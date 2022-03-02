
# import Brody from '../client/src/assets/brody.jpg'
# import Kato from '../client/src/assets/Kato.jpg'
# import Roman from '../client/src/assets/Roman.jpg'
 puts "Seeding..."

# Users
 u1= User.create(first_name: 'Alexandra', last_name: 'Weaver', username: 'aweaver', password: 'Hello123', state: 'Texas')
 u2 = User.create(first_name: 'Thomas', last_name: 'Weaver', username: 'tommytom', password: 'Oakley1', state: 'Alaska')

# Pets
p1 = Pet.create(name: 'Kato', species: 'Dog', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEh9nilG7fXPPFk_Yu0NoASw_jPTBuecnmbAzkP6AwoH5acGWJBublKoW2XxPiUMDBHQ_aql9npHeNDr3IT2Uw2PQ_9dTYG7juao0eSgJro-L45QB2coy1nIjSAaGlNMjhJNiSJCSKR_WSM1EORS0hZ7r0HNOPlyf9Yb9Ts2cK8bKCiD81oL0VMs5jHLsA=w478-h583', breed: 'Doberman Pinscher', age: 4, gender: 'Male', personality: 'Timid', user_id: u1.id)

p2 = Pet.create(name: 'Roman', species: 'Dog', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEi3b4V3Rh85M1OfyGVukgAuESbgqSVh0H_LlbDJLGMsCJDjmy-imHWw42atzFGaWGwdB8FewmK-ex43r6Ef4Ksjpia2ulugCMf1prZvMDYSv3YnJf6CdoHvf1ZVByltgLKfKdSFEatiOm3dEt-Pm3Y5-dLD36kSYxZXdFGP9Fe3PSNwPA28zKL-shE3bA=w469-h579', breed: 'German Short-Haired Pointer', age: 5, gender: 'Male', personality: 'Goofball!', user_id: u2.id)

p3 = Pet.create(name: 'Brody', species: 'Dog', image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiq8wnz01aQRltWHSoTdldA-pGkC0o4slgp-L0qrTV_PVsYp_3aghAqJ0cniW-7oSoEUGTvFURu8RoDNWvFDLURBFGW-oeu0pI93Wr-sLXdq3rSHn2EaJiUZn7GGC24Pu6ihg1PqsrCiH6OnYKex8RuainK5TvAPHiQZeFILwTM9sa8Aqvi-BcjygFuDw=w480-h571', breed: 'Doberman Pinscher', age: 1, gender: 'Male', personality: 'Rowdy AF', user_id: u1.id)

# Vaxxes
v1 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p1.id)

v2 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u2.id, pet_id: p2.id)

v3 = Vaccination.create(name: 'Rabies Vaccine', description: 'This vaccine protects against the rabies virus', date_received: "2022-02-27 22:39:27.278572000 +0000", expiration_date: "2022-02-28 22:39:27.278572000 +0000", name_of_vet_clinic: 'Acton Animal Hospital', user_id: u1.id, pet_id: p3.id)


 puts "Seeding done!"