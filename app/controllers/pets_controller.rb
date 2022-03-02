class PetsController < ApplicationController
    def index
        current_user = User.find_by(id: session[:user_id])
        if (current_user) 
            render json: current_user.pets
        else 
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end

    def show 
        pet = Pet.find_by(id: params[:id])
        render json: pet, include: :vaccinations
    end
end
