class User < ApplicationRecord
    has_secure_password
    has_many :vaccinations
    has_many :pets, through: :vaccinations

    PASSWORD_REQUIREMENTS = /\A(?=.*\d)(?=.*([a-z]|[A-Z]))([\x20-\x7E]){8,40}\z/
    # Password should contain at least one integer, at least one alphabet (either in downcase or upcase), can have special characters from 20 to 7E ascii values, should be minimum of 8 and maximum of 40 characters long.

    validates :first_name, prescence: true
    validates :last_name, prescence: true
    validates :username, prescence: true, uniqueness: true
    validates :password, presence: true, format: PASSWORD_REQUIREMENTS
    validates :state, inclusion: { in: %w(
    alabama
    alaska
    arizona
    arkansas
    california
    colorado
    connecticut
    delaware
    florida
    georgia
    hawaii
    idaho
    illinois
    indiana
    iowa
    kansas
    kentucky
    louisiana
    maine
    maryland
    massachusetts
    michigan
    minnesota
    mississippi
    missouri
    montana
    nebraska
    nevada
    'new hampshire'
    'new jersey'
    'new mexico'
    'new york'
    north carolina
    north dakota
    ohio
    oklahoma
    oregon
    pennsylvania
    rhode island
    south carolina
    south dakota
    tennessee
    texas
    utah
    vermont
    virginia
    washington
    west virginia
    wisconsin
    wyoming
    ),
    message: "%{value} is not a valid state" }


end
