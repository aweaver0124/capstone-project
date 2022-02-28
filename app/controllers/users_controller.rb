class UsersController < ApplicationController
    
    def show
        current_user = auth
        if current_user
            render json: current_user, status: :ok
        else 
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :state)
    end
    
end
