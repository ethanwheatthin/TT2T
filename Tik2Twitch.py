print("Starting TikTok 2 Twitch Chat bot!")
from TikTokLive import TikTokLiveClient
from TikTokLive.types.events import CommentEvent, ConnectEvent 
from twitchio.ext import commands
import os



class T2TTBot(commands.Bot):
    client: TikTokLiveClient = TikTokLiveClient(unique_id="@djlucky1968")

    def data_handler(data):
        print(data)
        
    def __init__(self):
        # Initialise our Bot with our access token, prefix and a list of channels to join on boot...
        # prefix can be a callable, which returns a list of strings or a string...
        # initial_channels can also be a callable which returns a list of strings...
        
        super().__init__(token='ynsm2uovo1eic8muhso4puibog8lfm', prefix='?', initial_channels=['alacajam'])
    
    
    async def event_ready(self):
        # Notify us when everything is ready!
        # We are logged in and ready to chat and use commands...
        print(f'Logged in as | {self.nick}')
        self.client.add_listener("comment", self.data_handler)

        

    async def event_message(self, message):
        # Messages with echo set to True are messages sent by the bot...
        # For now we just want to ignore them...
        if message.echo:
            return
        # Print the contents of our message to console...
        print(message.content)
        # Since we have commands and are overriding the default `event_message`
        # We must let the bot know we want to handle and invoke our commands...
        await self.handle_commands(message)
    



    @commands.command()
    async def sendMessage(self, ctx: commands.Context):
        # Here we have a command hello, we can invoke our command with our prefix and command name
        # e.g ?hello
        # We can also give our commands aliases (different names) to invoke with.

        # Send a hello back!
        # Sending a reply back to the channel is easy... Below is an example.
        #await ctx.send(f'Hello {ctx.author.name}!')
        print("Send message")



def connect_to_twitch():
    bot = T2TTBot()
    bot.run()

    

if __name__ == '__main__':
    # Run the client and block the main thread
    # await client.start() to run non-blocking
    # client.run()
    connect_to_twitch()