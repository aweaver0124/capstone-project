class Pet < ApplicationRecord
    has_many :vaccinations
    belongs_to :user
end
