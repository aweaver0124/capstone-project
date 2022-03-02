class VaccinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date_received, :expiration_date, :name_of_vet_clinic, :user_id, :pet_id
end
