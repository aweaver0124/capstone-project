class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :image
      t.string :breed
      t.integer :age
      t.string :gender
      t.string :personality
      t.integer :user_id

      t.timestamps
    end
  end
end
