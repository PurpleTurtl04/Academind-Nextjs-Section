export default async function MealPost({ params }) {
    const { slug } = await params;

    return (
        <main>
            <h1>Meal Details</h1>
            <p>{slug}</p>
        </main>
    );
}
