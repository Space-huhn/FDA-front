import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {AspectRatio} from "@mui/icons-material";
import {BakeryDiningIcon} from "@mui/icons-material";
import Button from "@mui/material/Button";




const Onboarding = () => {
    return (
        <Card data-resizable>

            <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                🎊 Congrats Julia 🎊
            </Typography>
            <CardContent sx={{ maxWidth: '40ch' }}>
                You just gain one Cookhat for Salad cooking. Share your achievement with your
                friends.
            </CardContent>
            <CardActions
                orientation="vertical"
                buttonFlex={1}
                sx={{
                    '--Button-radius': '40px',
                    width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                }}
            >
                <Button variant="plain" color="neutral">
                    Skip
                </Button>
            </CardActions>

        </Card>
    );
};

export default Onboarding;