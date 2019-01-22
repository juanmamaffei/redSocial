class PostChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "posts"
  end

  def saludar
    ActionCable.server.broadcast("posts", str: "hola mundo")
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
