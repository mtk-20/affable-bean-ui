import Image from "next/image";

export function HeaderComponent() {
    return (
        <>
                <div id="container_1">
                    <section id="header">
                        <Image id="logo" src="/images/logo.png" alt="logo image" width={150} height={170}/>
                        <Image id="logoText" src="/images/logoText.png" alt="logo text image" width={350} height={110}/>
                    </section>
            </div>

        </>
    )
}