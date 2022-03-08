class VaccinationsController < ApplicationController
    def index
        vaccinations = Vaccination.all
        render json: vaccinations, status: :ok
    end

    def show 
        vax = Vaccination.find_by(id: params[:id])
        render json: vax, include: :pet
    end

    def create
        vax = Vaccination.create!(vax_params)
        render json: vax, status: :created
    end
    
    def destroy
        vax = Vaccination.find_by(id: params[:id])
        if vax
            vax.destroy
            head :no_content
        else
            render json: { error: "Pet not found" }, status: :not_found
        end
    end

    private

    def vax_params
        params.permit(:name, :description, :date_received, :expiration_date, :name_of_vet_clinic, :user_id, :pet_id)
    end
end
