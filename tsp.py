import sys, os; sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import networkx as nx
import numpy as np

def calculate_distance(graph, node1, node2):
    return graph[node1][node2]['weight']

def nearest_neighbor(graph, start_node):
    visited = set()
    current_node = start_node
    path = [current_node]
    visited.add(current_node)
    while len(visited) < len(graph.nodes):
        next_node = min([n for n in graph.neighbors(current_node) if n not in visited], key=lambda n: calculate_distance(graph, current_node, n))
        visited.add(next_node)
        path.append(next_node)
        current_node = next_node
    return path

def solve_tsp(graph, start_node):
    path = nearest_neighbor(graph, start_node)
    return path

if __name__ == '__main__':
    G = nx.Graph()
    G.add_edge('A', 'B', weight=10)
    G.add_edge('B', 'C', weight=15)
    G.add_edge('C', 'D', weight=20)
    G.add_edge('D', 'A', weight=30)
    G.add_edge('A', 'C', weight=35)
    G.add_edge('B', 'D', weight=25)
    G.add_edge('C', 'B', weight=18)
    G.add_edge('D', 'C', weight=22)
    G.add_edge('A', 'D', weight=40)
    start_node = 'A'
    path = solve_tsp(G, start_node)
    print(path)