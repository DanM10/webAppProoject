import {WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway(
    8086,
    {
        cors:{
            origin: "*",
        }
    }
)
export class EventosGateway{

}