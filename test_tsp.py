import sys, os; sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import unittest
import tsp

class TestTSP(unittest.TestCase):
    def test_nearest_neighbor(self):
        G = tsp.G
        start_node = 'A'
        path = tsp.nearest_neighbor(G, start_node)
        self.assertEqual(path, ['A', 'B', 'C', 'D', 'A'])

    def test_solve_tsp(self):
        G = tsp.G
        start_node = 'A'
        path = tsp.solve_tsp(G, start_node)
        self.assertEqual(path, ['A', 'B', 'C', 'D', 'A'])

if __name__ == '__main__':
    unittest.main()