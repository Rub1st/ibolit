class SalesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    item = Sale.new(permit_params)
    product = Product.find(item.product.id)
    item.cost = item.count.to_f * product.price.to_f
    product.update(count: product.count.to_f - item.count.to_f)
    if item.save
      render json: Sale.all
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def index
    render json: Sale.all
  end

  private

  def permit_params
    params.require(:sale).permit(
      :product_id,
      :count
    )
  end
end
