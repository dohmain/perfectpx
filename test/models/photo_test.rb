# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :string
#  creator_id      :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  unsplashURL     :string
#  unsplashUserURL :string
#  unsplashName    :string
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
