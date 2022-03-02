class VaccinationsController < ApplicationController
    def index
        vaccinations = Vaccination.all
        render json: vaccinations, status: :ok
    end

    def show 
        vax = Vaccination.find_by(id: params[:id])
        render json: vax, include: :pet
    end
end
