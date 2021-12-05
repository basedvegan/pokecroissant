import React from 'react'
import Sound from 'react-sound';

function PlaySound(
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) {
    return (
        <div>
        <Sound 
        url="https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        </div>
    

    )
}

export default PlaySound

