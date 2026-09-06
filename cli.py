import sys
import argparse
from tsp import nearest_neighbour_tsp
import numpy as np

def main():
    parser = argparse.ArgumentParser(description='Travelling Salesman Problem Solver')
    parser.add_argument('--graph', type=str, help='Path to graph file')
    parser.add_argument('--start_node', type=int, help='Start node')
    args = parser.parse_args()
    graph = np.loadtxt(args.graph)
    start_node = args.start_node
    path = nearest_neighbour_tsp(graph, start_node)
    print('Path:', path)
if __name__ == '__main__':
    main()