class ProductsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    item = Product.new(permit_params)
    if item.save
      render json: Product.all
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    item = Product.find(params[:id])
    if item.update(permit_params)
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Product.find(params[:id]).destroy
    render json: Product.all
  end

  def index
    render json: Product.all
  end

  private

  def permit_params
    params.require(:product).permit(
      :name,
      :annotation,
      :count,
      :price
    )
  end
end
