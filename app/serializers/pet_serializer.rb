class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :image, :breed, :age, :gender, :personality, :user_id, :vaccinations
end
