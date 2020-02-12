# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  fname           :string
#  lname           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password_digest, presence: { message: 'Password cannot be empty!'}
  validates :session_token, presence: true, uniqueness: true 
  validates :password, length: { minimum: 5, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username) # figure out user log in with either email or username
    return nil unless user && user.is_password?(password)
    user 
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64 
    self.save! 
    self.session_token 
  end

  private 
  
  def ensure_session_token 
    self.session_token ||= SecureRandom.base64 
  end
end
