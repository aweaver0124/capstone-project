class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :image, :breed, :age, :gender, :personality, :vaccinations
end
