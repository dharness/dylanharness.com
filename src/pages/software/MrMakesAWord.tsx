import React from "react";

const MrMakesAWord = () => {
  return (
    <div className="mr-grid">
      <div className="mr-title section-title">Mr. Makes-A-Word</div>
      <div className="mr-subtitle section-subtitle">
        <a href="https://apps.apple.com/us/app/mr-makes-a-word/id1496556261">
          <img src="assets/shared/AppStoreDownloadBadge.svg" alt="" />
        </a>
      </div>
      <div className="mr-description section-description">
        Mr. Makes-A-Word is a fun and colorful word game for iOS. In addition to
        13 cooky characters to unlock, the game features over 100 levels that
        increase in difficulty with the player’s skill.
      </div>
      <div className="mr-trailer">
        <div className="mr-trailer-frame">
          <video
            width="100%"
            controls="controls"
            preload="none"
            poster="assets/mr-makes/video-thumbnail.png"
          >
            <source src="assets/videos/portrait_v1.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
      <div className="mr-cards">
        <picture>
          <source
            srcSet="./assets/mr-makes/cards/bobmeat.webp"
            type="image/webp"
            id="mr-cards-webp"
          />
          <source
            srcSet="./assets/mr-makes/cards/bobmeat.png"
            type="image/png"
            id="mr-cards-png"
          />
          <img src="./assets/mr-makes/cards/bobmeat.png" id="mr-cards-img" />
        </picture>
      </div>
      <div className="mr-cereal">
        <video
          className="gif-fallback__video"
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          id="gif_./assets/mr-makes/cereal__video"
        >
          <source src="./assets/mr-makes/cereal.webm" type="video/webm" />
          <source src="./assets/mr-makes/cereal.mp4" type="video/mp4" />
        </video>
        <img
          className="gif-fallback__gif"
          src="./assets/mr-makes/cereal.gif"
          id="gif_./assets/mr-makes/cereal"
          style={{ display: "none" }}
        />
      </div>
      <div className="mr-gift">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          id="gif_./assets/mr-makes/gift__video"
        >
          <source src="./assets/mr-makes/gift.webm" type="video/webm" />
          <source src="./assets/mr-makes/gift.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mr-milk-bag">
        <video
          className="gif-fallback__video"
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          id="gif_./assets/mr-makes/milkbag__video"
        >
          <source src="./assets/mr-makes/milkbag.webm" type="video/webm" />
          <source src="./assets/mr-makes/milkbag.mp4" type="video/mp4" />
        </video>
        <img
          className="gif-fallback__gif"
          src="./assets/mr-makes/milkbag.gif"
          id="gif_./assets/mr-makes/milkbag"
          style={{ display: "none" }}
        />
      </div>
      <div className="mr-tiles-gif">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          id="gif_./assets/mr-makes/tiles-gif__video"
        >
          <source src="./assets/mr-makes/tiles-gif.webm" type="video/webm" />
          <source src="./assets/mr-makes/tiles-gif.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mr-sticker-lg allow-overflow" id="sticker-lg-container">
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/blender.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/blender.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/blender.png"
            id="blender"
            width="90%"
            style={{ display: "block" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_uncle.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_uncle.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/doris_uncle.png"
            id="doris_uncle"
            width="110%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/leapsack_little-man.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/leapsack_little-man.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/leapsack_little-man.png"
            id="leapsack_little-man"
            width="76%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_dad.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_dad.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/fish_dad.png"
            id="fish_dad"
            width="81%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/bob_steak.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/bob_steak.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/bob_steak.png"
            id="bob_steak"
            width="71%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/mark_spaghetti.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/mark_spaghetti.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/mark_spaghetti.png"
            id="mark_spaghetti"
            width="115%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/box_bunny.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/box_bunny.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/box_bunny.png"
            id="box_bunny"
            width="107%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_deborah.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_deborah.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/fish_deborah.png"
            id="fish_deborah"
            width="74%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/mosquitos_fly.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/mosquitos_fly.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/mosquitos_fly.png"
            id="mosquitos_fly"
            width="75%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_crayon.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_crayon.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/doris_crayon.png"
            id="doris_crayon"
            width="87%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_lil-debbie.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/fish_lil-debbie.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/fish_lil-debbie.png"
            id="fish_lil-debbie"
            width="95%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/mosquitos_juice.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/mosquitos_juice.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/mosquitos_juice.png"
            id="mosquitos_juice"
            width="84%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_dad.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_dad.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/doris_dad.png"
            id="doris_dad"
            width="110%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/insects_banana.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/insects_banana.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/insects_banana.png"
            id="insects_banana"
            width="115%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/wanda_ovaries.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/wanda_ovaries.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/wanda_ovaries.png"
            id="wanda_ovaries"
            width="73%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_mom.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/doris_mom.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/doris_mom.png"
            id="doris_mom"
            width="100%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/lg/leapsack.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/lg/leapsack.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/lg/leapsack.png"
            id="leapsack"
            width="90%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
      </div>
      <div className="mr-sticker-sm-1" id="sticker-sm1-container">
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/7friends_waffle-mix.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/7friends_waffle-mix.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/7friends_waffle-mix.png"
            id="7friends_waffle-mix"
            width="70%"
            style={{ display: "block" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_pirate-hat.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_pirate-hat.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/box_pirate-hat.png"
            id="box_pirate-hat"
            width="90%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_newton.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_newton.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/madame_newton.png"
            id="madame_newton"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_magazine.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_magazine.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/bob_magazine.png"
            id="bob_magazine"
            width="40%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_screaming-apple.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_screaming-apple.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/madame_screaming-apple.png"
            id="madame_screaming-apple"
            width="85%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_sausage.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_sausage.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/bob_sausage.png"
            id="bob_sausage"
            width="60%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/fish_tv.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/fish_tv.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/fish_tv.png"
            id="fish_tv"
            width="85%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_wig.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/madame_wig.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/madame_wig.png"
            id="madame_wig"
            width="70%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_tongue.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/bob_tongue.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/bob_tongue.png"
            id="bob_tongue"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/insects_spray.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/insects_spray.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/insects_spray.png"
            id="insects_spray"
            width="35%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/tongue_bush.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/tongue_bush.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/tongue_bush.png"
            id="tongue_bush"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_bolts.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_bolts.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/box_bolts.png"
            id="box_bolts"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/leapsack_egg.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/leapsack_egg.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/leapsack_egg.png"
            id="leapsack_egg"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/tongue_log.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/tongue_log.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/tongue_log.png"
            id="tongue_log"
            width="85%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_crate.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_crate.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/box_crate.png"
            id="box_crate"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/leapsack_pills.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/leapsack_pills.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/leapsack_pills.png"
            id="leapsack_pills"
            width="83%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_hammer.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-1/box_hammer.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-1/box_hammer.png"
            id="box_hammer"
            width="60%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
      </div>
      <div className="mr-sticker-sm-2" id="sticker-sm2-container">
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_brian.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_brian.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/7friends_brian.png"
            id="7friends_brian"
            width="90%"
            style={{ display: "block" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_piggy-bank.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_piggy-bank.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/7friends_piggy-bank.png"
            id="7friends_piggy-bank"
            width="75%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/insects_flies.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/insects_flies.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/insects_flies.png"
            id="insects_flies"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/leapsack_clock.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/leapsack_clock.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/leapsack_clock.png"
            id="leapsack_clock"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/tongue_pitcher-plant.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/tongue_pitcher-plant.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/tongue_pitcher-plant.png"
            id="tongue_pitcher-plant"
            width="103%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_plug.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_plug.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/7friends_plug.png"
            id="7friends_plug"
            width="103%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/madame_underwear.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/madame_underwear.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/madame_underwear.png"
            id="madame_underwear"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_balloon-2.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_balloon-2.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/wanda_balloon-2.png"
            id="wanda_balloon-2"
            width="85%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_presents.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/7friends_presents.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/7friends_presents.png"
            id="7friends_presents"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mark_sauce.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mark_sauce.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/mark_sauce.png"
            id="mark_sauce"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_balloon.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_balloon.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/wanda_balloon.png"
            id="wanda_balloon"
            width="85%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/bob_drowning-man-in-jar.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/bob_drowning-man-in-jar.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/bob_drowning-man-in-jar.png"
            id="bob_drowning-man-in-jar"
            width="60%"
            style={{ display: "none" }}
            data-bg-color="#ffd1d1"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mosquitos_snail.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mosquitos_snail.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/mosquitos_snail.png"
            id="mosquitos_snail"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_cake.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_cake.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/wanda_cake.png"
            id="wanda_cake"
            width="75%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/insects_bag-of-garbage.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/insects_bag-of-garbage.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/insects_bag-of-garbage.png"
            id="insects_bag-of-garbage"
            width="75%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mosquitos_straw.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/mosquitos_straw.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/mosquitos_straw.png"
            id="mosquitos_straw"
            width="55%"
            style={{ display: "none" }}
            data-bg-color="#aaeefe"
          />
        </picture>
        <picture>
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_candle.webp"
            type="image/webp"
          />
          <source
            srcSet="./assets/mr-makes/stickers/sm-2/wanda_candle.png"
            type="image/png"
          />
          <img
            src="./assets/mr-makes/stickers/sm-2/wanda_candle.png"
            id="wanda_candle"
            width="80%"
            style={{ display: "none" }}
            data-bg-color="#fee090"
          />
        </picture>
      </div>
      <div className="mr-powerups-1">
        <picture>
          <source srcSet="./assets/mr-makes/powerups.webp" type="image/webp" />
          <source srcSet="./assets/mr-makes/powerups.png" type="image/png" />
          <img src="./assets/mr-makes/powerups.png" alt="" id="powerups" />
        </picture>
      </div>
      <div className="mr-powerups-2">
        <picture>
          <source srcSet="./assets/mr-makes/icons.webp" type="image/webp" />
          <source srcSet="./assets/mr-makes/icons.png" type="image/png" />
          <img src="./assets/mr-makes/icons.png" alt="" id="icons" />
        </picture>
      </div>
      <div className="mr-lemoon-bg" />
      <div className="mr-lemoon">
        <picture>
          <source srcSet="./assets/mr-makes/lemoon.webp" type="image/webp" />
          <source srcSet="./assets/mr-makes/lemoon.png" type="image/png" />
          <img src="./assets/mr-makes/lemoon.png" alt="" id="lemoon" />
        </picture>
      </div>
    </div>
  );
};

export default MrMakesAWord;
