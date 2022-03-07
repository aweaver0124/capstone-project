class VaccinationsController < ApplicationController
    def index
        vaccinations = Vaccination.all
        render json: vaccinations, status: :ok
    end

    def show 
        vax = Vaccination.find_by(id: params[:id])
        render json: vax, include: :pet
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
end
