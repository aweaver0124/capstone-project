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
        if (pet)
            render json: pet, include: :vaccinations
        else
            render json: { error: "Pet not found"}, status: :not_found
        end
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        if pet
            pet.destroy
            head :no_content
        else
            render json: { error: "Workout not found" }, status: :not_found
        end
    end
end