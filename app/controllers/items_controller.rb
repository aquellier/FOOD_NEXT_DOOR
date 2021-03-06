class ItemsController < ApplicationController
  # def show
  #   @item = current_user.items.where(state: 'paid').find(params[:id])
  #   authorize @item
  # end

  def new
    @item = Item.new
    authorize @item
  end

  def create

    @order = current_user.current_order
    @item = Item.new(item_params)
    @meal = Meal.find(params[:meal_id])
    @item.meal = @meal
    @item.order = @order
    @item.item_price = @meal.price * @item.doses
    if @item.save
      #redirect_to meals_path
    else
      render "meals/show"
    end
    authorize @item
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    authorize @item
    redirect_to order_path(current_user.orders.last)
  end

  private

  def set_meal
    @meal = Meal.find(params[:meal_id])
    authorize @meal
  end

  def item_params
    params.require(:item).permit(:doses)
  end
end
