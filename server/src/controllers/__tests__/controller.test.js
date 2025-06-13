const controller = require('../controller').default;

describe('Orders Controller', () => {
  let strapi;
  let ctx;
  let mockService;

  beforeEach(() => {
    // Setup mock service
    mockService = {
      getWelcomeMessage: jest.fn().mockReturnValue('Welcome to Orders Plugin'),
      getOrders: jest.fn(),
      getOrderById: jest.fn(),
    };

    // Setup mock strapi
    strapi = {
      plugin: jest.fn(() => ({
        service: jest.fn(() => mockService),
      })),
    };

    // Setup mock context
    ctx = {
      body: null,
      request: {
        query: {},
      },
      params: {},
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('index', () => {
    it('should return welcome message', () => {
      // Create controller instance
      const controllerInstance = controller({ strapi });
      
      // Call the index method
      controllerInstance.index(ctx);

      // Assertions
      expect(strapi.plugin).toHaveBeenCalledWith('strapi-5-plugin-orders');
      expect(mockService.getWelcomeMessage).toHaveBeenCalled();
      expect(ctx.body).toBe('Welcome to Orders Plugin');
    });
  });

  describe('getOrder', () => {
    it('should return orders with query parameters', async () => {
      // Setup
      const mockOrders = [{ id: 1, status: 'paid' }, { id: 2, status: 'pending' }];
      mockService.getOrders.mockResolvedValue(mockOrders);
      ctx.request.query = { page: 1, status: 'paid', q: 'test' };

      // Create controller instance
      const controllerInstance = controller({ strapi });
      
      // Call the method
      await controllerInstance.getOrder(ctx);

      // Assertions
      expect(mockService.getOrders).toHaveBeenCalledWith({
        page: 1,
        status: 'paid',
        q: 'test',
      });
      expect(ctx.body).toEqual(mockOrders);
    });

    it('should handle errors when getting orders', async () => {
      // Setup
      const error = new Error('Database error');
      mockService.getOrders.mockRejectedValue(error);

      // Create controller instance
      const controllerInstance = controller({ strapi });
      
      // Call the method
      await controllerInstance.getOrder(ctx);

      // Assertions
      expect(ctx.send).toHaveBeenCalledWith(
        { message: expect.any(String) },
        409
      );
    });
  });

  describe('getOrderById', () => {
    it('should return order by id', async () => {
      // Setup
      const mockOrder = { id: 1, status: 'paid', total: 100 };
      mockService.getOrderById.mockResolvedValue(mockOrder);
      ctx.params = { id: '1' };

      // Create controller instance
      const controllerInstance = controller({ strapi });
      
      // Call the method
      await controllerInstance.getOrderById(ctx);

      // Assertions
      expect(mockService.getOrderById).toHaveBeenCalledWith('1');
      expect(ctx.body).toEqual(mockOrder);
    });

    it('should handle errors when getting order by id', async () => {
      // Setup
      const error = new Error('Order not found');
      mockService.getOrderById.mockRejectedValue(error);
      ctx.params = { id: '999' };

      // Create controller instance
      const controllerInstance = controller({ strapi });
      
      // Call the method
      await controllerInstance.getOrderById(ctx);

      // Assertions
      expect(ctx.send).toHaveBeenCalledWith(
        { message: expect.any(String) },
        409
      );
    });
  });
});