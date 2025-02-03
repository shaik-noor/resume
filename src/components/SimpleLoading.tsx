function SimpleLoading() {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-10">
            {/* Loading Spinner */}
            <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-primary border-opacity-50"></div>

            {/* Interactive Loading Text */}
            <div className="space-y-2 text-center text-primary">
                <p className="text-lg font-medium">Getting the latest updates...</p>

            </div>
        </div>
    );
}

export default SimpleLoading;
