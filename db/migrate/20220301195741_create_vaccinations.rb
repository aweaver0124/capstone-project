class CreateVaccinations < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccinations do |t|
      t.string :name
      t.string :description
      t.datetime :date_received
      t.datetime :expiration_date
      t.string :name_of_vet_clinic
      t.integer :user_id
      t.integer :pet_id

      t.timestamps
    end
  end
end
