class VaccinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date_received, :expiration_date, :name_of_vet_clinic, :user_id, :pet_id

  def date_received
    object.date_received.strftime('%A, %B %e, %Y')
  end

  def expiration_date
    object.expiration_date.strftime('%A, %B %e, %Y')
  end


end
