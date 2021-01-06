class ArrivedProductsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    item = ArrivedProduct.new(permit_params)
    product = Product.find(item.product.id)
    product.update(count: product.count.to_f + item.count.to_f)
    if item.save
      render json: ArrivedProduct.all
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def index
    render json: ArrivedProduct.all
  end

  private

  def permit_params
    params.require(:arrived_product).permit(
      :product_id,
      :count
    )
  end
end
