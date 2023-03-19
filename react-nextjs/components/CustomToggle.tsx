import {Button, useAccordionButton} from "react-bootstrap";
import {ReactNode} from "react";
import {MdOpenInFull} from "react-icons/all";

interface CustomToggleProps {
    children: React.ReactNode;
    eventKey: string;
}

export default function ({ children, eventKey }: CustomToggleProps) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!')
    );

    return (
        <Button
            variant={"dark"}
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}