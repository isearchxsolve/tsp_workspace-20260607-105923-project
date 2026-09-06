import math

def tsp(n, distances):
    # Initialize the minimum distance to infinity
    min_distance = float('inf')
    # Initialize the current node to 0
    current_node = 0
    # Initialize the visited set to a set containing 0
    visited = {0}
    # Initialize the path to a list containing 0
    path = [0]
    # Loop until all nodes have been visited
    while len(visited) < n:
        # Initialize the minimum distance to the current node to infinity
        min_distance_to_current_node = float('inf')
        # Initialize the next node to None
        next_node = None
        # Loop over all unvisited nodes
        for node in range(n):
            if node not in visited:
                # Calculate the distance from the current node to the unvisited node
                distance = distances[current_node][node]
                # If the distance is less than the minimum distance to the current node, update the minimum distance and the next node
                if distance < min_distance_to_current_node:
                    min_distance_to_current_node = distance
                    next_node = node
        # Add the next node to the visited set and the path
        visited.add(next_node)
        path.append(next_node)
        # Update the current node to the next node
        current_node = next_node
    # Calculate the total distance of the path
    total_distance = 0
    for i in range(n):
        total_distance += distances[path[i]][path[(i+1)%n]]
    # Return the total distance
    return total_distance

# Define the distance matrix
distances = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]
# Call the tsp function
print(tsp(4, distances))