import React from "react";
import Streamer from "./Streamer";

export default function StreamersList() {
    return (
        <aside>
            <h3 className="font-bold pb-2">Canales recomendados</h3>
            <Streamer
                avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/9eb48e6a-eae8-49f7-933a-b9a047234054-profile_image-70x70.png"
                name="elded"
                category="Conversando"
                viewers="6.2"
                online
            />
            <Streamer
                avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/3ecade58-a91d-4399-9b2e-d6da8957d5f9-profile_image-70x70.png"
                name="MYM_ALKAPONE"
                category="Rust"
                viewers="9.6"
                online
            />
            <Streamer
                avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/0e6f8782-d5b9-4a51-ae8a-9c952c213487-profile_image-70x70.png"
                name="rivers_gg"
                category="Eventos especiales"
                viewers="24.5"
                online
            />
            <Streamer
                avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/edc0529a-0250-4ad4-a77f-e3072ff29c81-profile_image-70x70.png"
                name="TheGrefg"
                category="Eventos especiales"
                viewers="30299"
                online
            />
            <Streamer
                avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/23ee9d3c-1491-46f2-893f-4a5395eeafac-profile_image-70x70.png"
                name="ZilverK"
                category="Aire libre y viajes"
                viewers=""
            />
        </aside>
    );
}
