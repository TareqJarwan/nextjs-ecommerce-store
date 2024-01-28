const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto py-5">
                <p className="text-center text-sm text-black">
                    &copy; {new Date().getFullYear()} FakeStoreNameA, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;